import resolveParams from './resolve-params'
import resolveRequestInfo from './resolve-request-info'
import {IKegRequestOptions, IRequest, IRequestOptionNext, IRequestOptions} from './types'

const kegRequest = (options: IKegRequestOptions) =>  {
  if(!options.request){
    throw new Error('[kegRequest] request must have request item of options')
  }
  const {
    requestConfig = {requests: {}},
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
        const requestInfo: IRequest = resolveRequestInfo(_requestInfo, requestConfig)
        const {path, method} = requestInfo
        return request({
          path: typeof path === 'function' ? path(pathParams) : path,
          params,
          pathParams,
          headers,
          method,
        })
      }
    }
  }

}

export default kegRequest
