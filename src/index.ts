import join from 'url-join'
import {ActionContext} from 'vuex'
import resolveParams from './resolve-params'
import resolveRequestInfo from './resolve-request-info'
import {
  IHookPayload,
  IKegRequestOptions,
  IRequest,
  IRequestOptions, TFnAfterHook,
  TFnBeforeHook,
} from './types'
export * from './types'

async function pipeRunner<S>(
  context: ActionContext<S, any>,
  payload: IHookPayload,
  hookList?:
  TFnBeforeHook<S, any> | Array<TFnBeforeHook<S, any>>
  | TFnAfterHook<S, any> | Array<TFnAfterHook<S, any>>,
): Promise<IHookPayload> {
  if(!hookList){return payload}
  if(Array.isArray(hookList)){
    let result = payload
    for(const hook of hookList){
      // eslint-disable-next-line no-await-in-loop
      result = await (hook as any)(context, result)
    }
    return result
  }
  return (hookList as any)(context, payload)
}

function kegRequest<S = any>(options: IKegRequestOptions<any> = {})  {
  const {
    requestConfig = {requests: {}},
    def: {
      method: defaultMethod = 'GET',
    } = {},
    afterHook,
    beforeHook,
    request,
  } = options
  return () => {
    return (context: ActionContext<S, any>) => {
      return async (
        firstArgs: IRequestOptions | string | IRequest,
        ...args: any[]
      ): Promise<any> => {
        const {
          requestInfo: _requestInfo,
          headers,
          params,
          pathParams,
        } = resolveParams(firstArgs, ...args)
        const {basePath, requestInfo} = resolveRequestInfo(_requestInfo, requestConfig)
        if(typeof requestInfo === 'function'){
          return requestInfo(basePath, {params, headers})
        }
        const {path = '', method = defaultMethod, request: _request} = requestInfo
        const url = join(basePath, typeof path === 'function' ? path(pathParams) : path)
        const payload: IHookPayload = await pipeRunner<S>(
          context,
          {path: url, params, headers, method}, beforeHook
        )
        const {path: _url, ...otherPayload} = payload
        let result
        if(_request){
          result = await _request(_url, otherPayload)
        }else if(request){
          result = await request(url, otherPayload)
        }else{
          result = await fetch(url, {
            body: JSON.stringify(otherPayload.params),
            headers: {
              'Content-Type': 'application/json',
              ...otherPayload.headers,
            },
            method: otherPayload.method,
          })
        }
        return pipeRunner<S>(
          context,
          result,
          afterHook,
        )
      }
    }
  }

}

export default kegRequest
