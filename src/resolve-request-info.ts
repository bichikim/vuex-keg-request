
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
  requestConfig?: IRequestConfig<S, R>,
): IRequestConfig<S, R> | undefined {
  const cloneWay = [...way]
  if(cloneWay.length > 0){
    const nextModuleName: any = cloneWay.shift()
    if(!requestConfig || !requestConfig.modules){
      throw new Error(
        '[vuex-keg-request enterModule] there is no modules any more' +
        `is ${way.join('/')}`)
    }
    const _requestConfig = requestConfig.modules[nextModuleName]
    //

    let basePath: any = requestConfig.basePath
    let nextBasePath: any = _requestConfig.basePath
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
  requestConfig?: IRequestConfig<S, R>,
): IRequest | TRequestRunner {
  if(!requestConfig || !requestConfig.requests){
    throw new Error('no requests')
  }
  return requestConfig.requests[name]
}

function moduleExplorer<S, R>(
  requestInfo: string,
  context: ActionContext<S, R>,
  requestConfig?: IRequestConfig<S, R>,
): IResolveRequestInfoResult<S, R> {
  const [name, module] = requestInfo.split('@')
  const getResult = (requestConfig?: IRequestConfig<S, R>): IResolveRequestInfoResult<S, R> => {
    return {
      basePath: requestConfig && requestConfig.basePath,
      requestInfo: getRequest<S, R>(name, requestConfig),
    }
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

  /* istanbul ignore else */
  if(typeof requestInfo === 'object' || typeof requestInfo === 'function'){
    return {
      basePath: requestConfig && requestConfig.basePath,
      requestInfo,
    }
  }
  /* istanbul ignore next */
  throw new Error(
    '[vuex-keg-request resolveRequestInfo]' +
    ' requestInfo should be a function, a object or a string')
}

export default resolveRequestInfo
