import join from 'url-join'
import {ActionContext} from 'vuex'
import {
  TBasePass,
} from './types'

function resolveBasePath<S, R>(
  context: ActionContext<S, R>,
  bassPath: TBasePass<S, R>,
): string {
  return typeof bassPath === 'string' ? bassPath : bassPath(context)
}

function resolveBasePaths<S, R>(
  context: ActionContext<S, R>,
  bassPath: TBasePass<S, R> | Array<TBasePass<S, R>>,
): string {
  if(Array.isArray(bassPath)){
    let myBasePath: string = ''
    bassPath.forEach((value) => {
      if(value){
        myBasePath = join(myBasePath, resolveBasePath<S, R>(context, value))
      }
    })
    return myBasePath
  }
  return resolveBasePath(context, bassPath)
}

export default resolveBasePaths
