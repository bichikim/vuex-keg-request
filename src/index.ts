import join from 'url-join'
import resolveParams from './resolve-params'
import resolveRequestInfo from './resolve-request-info'
import {
  IKegRequestOptions,
  IRequest,
  IRequestOptions,
} from './types'
export * from './types'
const kegRequest = (options: IKegRequestOptions) =>  {
  if(!options.request){
    throw new Error('[kegRequest] request must have request item of options')
  }
  const {
    requestConfig = {requests: {}},
    def: {
      method: defaultMethod = 'GET',
    } = {},
    request,
  } = options
  return () => {
    return () => {
      return (
        firstArgs: IRequestOptions | string | IRequest,
        ...args: any[]
      ): any => {
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
        if(_request){
          _request(url, {params, headers, method})
        }
        return request(url, {params, headers, method})
      }
    }
  }

}

export default kegRequest
