import {IKegContext} from 'vuex-keg'

export interface IRequestRunnerPayload {
  params?: IParams
  headers?: IHeaders
  method?: string
}

export type TRequestRunner = (url: string, payload?: IRequestRunnerPayload) => Promise<any>

export interface IPathParams {[name: string]: string}
export interface IParams {[name: string]: any}
export interface IHeaders {[name: string]: any}

export interface IKegRequestOptions {
  requestConfig?: IRequestConfig
  auth?: (context: IKegContext) => {params: IParams, headers: IHeaders}
  def?: {
    method?: string
  },
  request: TRequestRunner
}

export interface IRequestOptions extends IRequestOptionNext{
  requestInfo: string | IRequest
}

export interface IRequestOptionNext {
  pathParams?: IPathParams
  params?: IParams
  headers?: IHeaders
}

export interface IModules {
  [name: string]: IRequestConfig
}

export interface IRequestConfig {
  basePath?: string
  requests: {[name: string]: IRequest | TRequestRunner}
  modules?: IModules
}

export type IFcPath = (pathParams: IPathParams) => string

export interface IRequest {
  path: string | IFcPath
  method: string
  request?: TRequestRunner
}
