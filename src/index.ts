import {
  IRequestConfig,
  IKegRequestOptions,
  IRequest, IRequestOptions,
} from './types'
import resolveParams from './resolve-params'
import resolveRequestInfo from './resolve-request-info'


const defaultSuccessDecoration = 'Success'
const defaultFailureDecoration = 'Failure'

export interface IResolveOptions {
  success?: string | TResolveDecorator
  failure?: string | TResolveDecorator
  requests?: IRequestConfig
}

const kegRequest = (options: IKegRequestOptions) => () => {
  const {
    requestConfig = {
      requests: {},
    },
  } = options

  return (context: any) => {
    return (
      firstArgs: IRequestOptions | string | IRequest,
      ...args: any[],
    ): Promise<any> => {
      const {
        requestInfo: _requestInfo,
      } = resolveParams(firstArgs, ...args)
      const requestInfo: IRequest = resolveRequestInfo(_requestInfo, requestConfig)
    }
  }
}

export default kegRequest
