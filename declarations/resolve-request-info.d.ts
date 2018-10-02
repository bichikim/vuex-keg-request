import { ActionContext } from 'vuex';
import { IRequest, IRequestConfig, IResolveRequestInfoResult } from './types';
declare function resolveRequestInfo<S, R>(requestInfo: string | IRequest, context: ActionContext<S, R>, requestConfig?: IRequestConfig<S, R>): IResolveRequestInfoResult<S, R>;
export default resolveRequestInfo;
