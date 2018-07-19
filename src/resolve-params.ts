import {
  IRequestOptions,
} from './types'
import {IRequest} from '@/types'

const resolveParams = (
  firstArgs: IRequestOptions | string | IRequest,
  ...args: any[],
): IRequestOptions => {
  if(typeof firstArgs === 'string' || typeof firstArgs === 'function'){
    const requestOptions: IRequestOptions = {requestInfo: firstArgs}
    const [params, pathParams, headers] = args
    Object.assign(requestOptions, {
      params,
      pathParams,
      headers,
    })
    return requestOptions
  }

  if(typeof firstArgs === 'object'){
    return firstArgs as IRequestOptions
  }

  throw Error(`[vuex-keg-request] unknown firstArgs : ${firstArgs}`)
}

export default resolveParams