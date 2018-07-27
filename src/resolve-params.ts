import {IRequest} from './types'
import {
  IRequestOptions,
} from './types'

const resolveParams = (
  firstArgs: IRequestOptions | string | IRequest, ...args: any[]): IRequestOptions => {
  if(!firstArgs){
    throw new Error('[vuex-keg-request resolve-params] firstArgs must exist')
  }
  if(
    typeof firstArgs === 'string'
    || typeof firstArgs === 'function'
    || typeof firstArgs === 'object' && !(firstArgs as IRequestOptions).requestInfo
  ){
    const [params, pathParams, headers] = args
    return Object.assign(
      {requestInfo: firstArgs as IRequest},
      {params, pathParams, headers}
    )
  }

  return firstArgs as IRequestOptions
}

export default resolveParams
