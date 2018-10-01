import join from 'url-join'
import {ActionContext} from 'vuex'
import resolveBasePaths from './resolve-base-path'
import resolveParams from './resolve-params'
import resolveRequestInfo from './resolve-request-info'
import {
  IHookPayload,
  IKegRequestOptions,
  IRequest,
  IRequestOptions, TFnAfterHook,
  TFnBeforeHook,
  TKegRequestPluginRunner,
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

function kegRequest<S = any, R = any>(options: IKegRequestOptions<S, R> = {})  {
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
    return (context: ActionContext<S, R>): TKegRequestPluginRunner => {
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
        const {basePath, requestInfo} =
          resolveRequestInfo<S, R>(_requestInfo, context, requestConfig)
        const url = resolveBasePaths(context, basePath)
        if(typeof requestInfo === 'function'){
          return requestInfo(url, {params, headers, method: defaultMethod})
        }
        const {path = '', method = defaultMethod, request: _request} = requestInfo
        const urlAndPath = join(url, typeof path === 'function' ? path(pathParams) : path)
        const payload: IHookPayload = await pipeRunner<S>(
          context,
          {path: urlAndPath, params, headers, method}, beforeHook
        )
        const {path: _urlAndPath, ...otherPayload} = payload
        let result
        if(_request){
          result = await _request(_urlAndPath, otherPayload)
        }else if(request){
          result = await request(_urlAndPath, otherPayload)
        }else{
          result = await fetch(_urlAndPath, {
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
