export type TFcResolveDecorator = ((name: string) => string)
export type TRequestRunner = (path: TPath, params: IParams, headers: IHeaders) => Promise<any>


export type TPath = string | IFcPath
export interface IPathParams {[name: string]: string}
export interface IParams {[name: string]: any}
export interface IHeaders {[name: string]: any}


export interface IKegRequestOptions {
  requestConfig?: IRequestConfig
}

export interface IRequestOptions {
  requestInfo: string | IRequest
  pathParams?: IPathParams
  params?: IParams
  headers?: IHeaders
}

export interface IModules {
  [name: string]: IRequestConfig
}

export interface IRequestConfig {
  basePath?: string
  requests: {[name: string]: IRequest}
  modules?: IModules
}


export type IFcPath = (pathParams: {[name: string]: string}) => string

export interface IRequest {
  path: string | IFcPath
  method: string
}