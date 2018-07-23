import {IRequest} from '@/types'
import {
  IRequestOptions,
} from './types'

const resolveParams = (
  firstArgs: IRequestOptions | string | IRequest, ...args: any[]): IRequestOptions => {
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

  if(typeof firstArgs === 'object'){
    return firstArgs as IRequestOptions
  }

  throw Error(`[vuex-keg-request] unknown firstArgs : ${firstArgs}`)
}

export default resolveParams
