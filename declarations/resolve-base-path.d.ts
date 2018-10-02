import { ActionContext } from 'vuex';
import { TBasePass } from './types';
declare function resolveBasePaths<S, R>(context: ActionContext<S, R>, bassPath?: TBasePass<S, R> | Array<TBasePass<S, R>>): string;
export default resolveBasePaths;
