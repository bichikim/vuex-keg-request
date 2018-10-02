import { ActionContext } from 'vuex';
import { IKegRequestOptions, TKegRequestPluginRunner } from './types';
export * from './types';
declare function kegRequest<S = any, R = any>(options?: IKegRequestOptions<S, R>): () => (context: ActionContext<S, R>) => TKegRequestPluginRunner;
export default kegRequest;
