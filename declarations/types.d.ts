import { ActionContext } from 'vuex';
import { IKegContext } from 'vuex-keg';
export interface IRequestRunnerPayload {
    params?: IParams;
    headers?: IHeaders;
    method?: string;
}
export interface IResolveRequestInfoResult<S, R> {
    basePath?: TBasePass<S, R> | Array<TBasePass<S, R>>;
    requestInfo: IRequest | TRequestRunner;
}
export interface IHookPayload extends IRequestRunnerPayload {
    path: string;
}
export declare type TRequestRunner = (url: string, payload: IRequestRunnerPayload) => Promise<any> | any;
export declare type TKegRequestPluginRunner = (firstArgs: IRequestOptions | string | IRequest, ...args: any[]) => Promise<any>;
export declare type TFnBasePass<S, R> = (context: ActionContext<S, R>) => string;
export declare type TFnBeforeHook<S, R> = (context: ActionContext<S, R>, payload: IHookPayload) => Promise<IHookPayload> | IHookPayload;
export declare type TFnAfterHook<S, R> = (context: ActionContext<S, R>, payload: any) => Promise<IHookPayload> | IHookPayload;
export interface IPathParams {
    [name: string]: string;
}
export interface IParams {
    [name: string]: any;
}
export interface IHeaders {
    [name: string]: any;
}
export interface IKegRequestOptions<S, R> {
    requestConfig?: IRequestConfig<S, R>;
    auth?: (context: IKegContext<S, R>) => {
        params: IParams;
        headers: IHeaders;
    };
    def?: {
        method?: string;
    };
    afterHook?: TFnAfterHook<any, R> | Array<TFnAfterHook<any, R>>;
    beforeHook?: TFnBeforeHook<any, R> | Array<TFnBeforeHook<any, R>>;
    request?: TRequestRunner;
}
export interface IRequestOptions extends IRequestOptionNext {
    requestInfo: string | IRequest;
}
export interface IRequestOptionNext {
    pathParams?: IPathParams;
    params?: IParams;
    headers?: IHeaders;
}
export interface IModules<S, R> {
    [name: string]: IRequestConfig<S, R>;
}
export declare type TBasePass<S, R> = string | TFnBasePass<S, R>;
export interface IRequestConfig<S, R> {
    basePath?: TBasePass<S, R> | Array<TBasePass<S, R>>;
    requests?: {
        [name: string]: IRequest | TRequestRunner;
    };
    modules?: IModules<S, R>;
}
export declare type IFcPath = (pathParams?: IPathParams) => string;
export interface IRequest {
    path: string | IFcPath;
    method: string;
    request?: TRequestRunner;
}
