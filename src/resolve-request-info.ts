import join from 'url-join'

import {
  IRequest,
  IRequestConfig,
  TRequestRunner,
} from './types'

interface IResolveRequestInfoResult {
  basePath: string
  requestInfo: IRequest | TRequestRunner
}

const enterModule = (way: string[], requestConfig: IRequestConfig): IRequestConfig => {
  if(way.length > 0){
    const nextModuleName = way.shift()
    if(!requestConfig.modules){
      throw new Error(
        '[vuex-keg-request enterModule] no modules any more a way of module' +
        `is ${way.join('/')}`)
    }
    const _requestConfig = requestConfig.modules[nextModuleName]
    //
    return enterModule(way, {
      ..._requestConfig,
      basePath: join(requestConfig.basePath || '', _requestConfig.basePath || ''),
    })
  }
  return requestConfig
}

const getRequest = (
  name: string,
  requestConfig: IRequestConfig,
): IRequest | TRequestRunner => {
  return requestConfig.requests[name]
}

const moduleExplorer = (
  requestInfo: string,
  requestConfig: IRequestConfig,
): IResolveRequestInfoResult => {
  const [name, module] = requestInfo.split('@')
  const getResult = (requestConfig: IRequestConfig) => {
    return {basePath: requestConfig.basePath, requestInfo: getRequest(name, requestConfig)}
  }
  if(!module){
    return getResult(requestConfig)
  }
  return getResult(enterModule(module.split('/'), requestConfig))
}

const resolveRequestInfo = (
  requestInfo: string | IRequest,
  requestConfig?: IRequestConfig,
): IResolveRequestInfoResult => {
  if(typeof requestInfo === 'string'){
    return moduleExplorer(requestInfo, requestConfig)
  }
  if(typeof requestInfo === 'object' || typeof requestInfo === 'function'){
    const {basePath = ''} = requestConfig || {}
    return {basePath, requestInfo}
  }
}

export default resolveRequestInfo
