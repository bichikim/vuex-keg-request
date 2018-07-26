
import {ActionContext} from 'vuex'

import {
  IRequest,
  IRequestConfig,
  IResolveRequestInfoResult,
  TRequestRunner,
} from './types'

function enterModule<S, R>(
  way: string[],
  context: ActionContext<S, R>,
  requestConfig: IRequestConfig<S, R>,
): IRequestConfig<S, R> {
  const cloneWay = [...way]
  if(cloneWay.length > 0){
    const nextModuleName = cloneWay.shift()
    if(!requestConfig.modules){
      throw new Error(
        '[vuex-keg-request enterModule] no modules any more a way of module' +
        `is ${way.join('/')}`)
    }
    const _requestConfig = requestConfig.modules[nextModuleName]
    //

    let basePath = requestConfig.basePath
    let nextBasePath = _requestConfig.basePath
    if(!Array.isArray(basePath)){
      basePath = [basePath]
    }
    if(!Array.isArray(nextBasePath)){
      nextBasePath = [nextBasePath]
    }

    return enterModule(
      cloneWay,
      context,
      {
        ..._requestConfig,
        basePath: (basePath as any[]).concat(nextBasePath),
      },
    )
  }
  return requestConfig
}

function getRequest<S, R>(
  name: string,
  requestConfig: IRequestConfig<S, R>,
): IRequest | TRequestRunner {
  return requestConfig.requests[name]
}

function moduleExplorer<S, R>(
  requestInfo: string,
  context: ActionContext<S, R>,
  requestConfig: IRequestConfig<S, R>,
): IResolveRequestInfoResult<S, R> {
  const [name, module] = requestInfo.split('@')
  const getResult = (requestConfig: IRequestConfig<S, R>): IResolveRequestInfoResult<S, R> => {
    return {basePath: requestConfig.basePath, requestInfo: getRequest<S, R>(name, requestConfig)}
  }
  if(!module){
    return getResult(requestConfig)
  }
  return getResult(enterModule(module.split('/'), context, requestConfig))
}

function resolveRequestInfo<S, R>(
  requestInfo: string | IRequest,
  context: ActionContext<S, R>,
  requestConfig?: IRequestConfig<S, R>,
): IResolveRequestInfoResult<S, R> {
  if(typeof requestInfo === 'string'){
    return moduleExplorer(requestInfo, context, requestConfig)
  }
  if(typeof requestInfo === 'object' || typeof requestInfo === 'function'){
    return {basePath: requestConfig.basePath, requestInfo}
  }
}

export default resolveRequestInfo
