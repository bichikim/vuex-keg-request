import joinPath from 'join-path'

import {
  IRequest,
  IRequestConfig,
} from './types'


const enterModule = (way: string[], requestConfig: IRequestConfig): IRequestConfig => {
  if(way.length > 0){
    const nextModuleName = way.shift()
    if(!requestConfig.modules){
      throw new Error(
        '[vuex-keg-request enterModule] no modules any more a way of module' +
        `is ${way.join('/')}`)
    }
    const _requestConfig = requestConfig.modules[nextModuleName]

    return enterModule(way, {
      ..._requestConfig,
      basePath: joinPath(requestConfig.basePath, _requestConfig.basePath)
    })
  }
  return requestConfig
}

const getRequest = (
  name: string,
  requestConfig: IRequestConfig,
): IRequest => {
  return requestConfig.requests[name]
}

const moduleExplorer = (
  requestInfo: string,
  requestConfig: IRequestConfig,
): IRequest => {
  const [name, module] = requestInfo.split('@')
  if(!module){
    return getRequest(name, requestConfig)
  }
  const _requestConfig = enterModule(module.split('/'), requestConfig)
  return getRequest(name, _requestConfig)
}

const resolveRequestInfo = (
  requestInfo: string | IRequest,
  requestConfig?: IRequestConfig,
): IRequest => {
  if(typeof requestInfo === 'string'){
    return moduleExplorer(requestInfo, requestConfig)
  }
  if(typeof requestInfo === 'object'){
    return requestInfo
  }
}

export default resolveRequestInfo