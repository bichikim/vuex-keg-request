import {ActionContext} from 'vuex'
import {IKegContext} from 'vuex-keg'

export interface IRequestRunnerPayload {
  params?: IParams
  headers?: IHeaders
  method?: string
}

export interface IResolveRequestInfoResult {
  basePath: string
  requestInfo: IRequest | TRequestRunner
}

export interface IHookPayload extends IRequestRunnerPayload{
  path: string
}

export type TRequestRunner = (url: string, payload: IRequestRunnerPayload) => Promise<any> | any

export type TFnBeforeHook<S, R> = (
  context: ActionContext<S, R>,
  payload: IHookPayload,
) => Promise<IHookPayload> | IHookPayload

export type TFnAfterHook<S, R> = (
  context: ActionContext<S, R>,
  payload: any,
) => Promise<IHookPayload> | IHookPayload

export interface IPathParams {[name: string]: string}
export interface IParams {[name: string]: any}
export interface IHeaders {[name: string]: any}

export interface IKegRequestOptions<S> {
  requestConfig?: IRequestConfig
  auth?: (context: IKegContext) => {params: IParams, headers: IHeaders}
  def?: {
    method?: string
  },
  afterHook?: TFnAfterHook<S, any> | Array<TFnAfterHook<S, any>>
  beforeHook?: TFnBeforeHook<S, any> | Array<TFnBeforeHook<S, any>>
  request?: TRequestRunner
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
