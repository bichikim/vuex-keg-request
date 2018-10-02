import { IRequest } from './types';
import { IRequestOptions } from './types';
declare const resolveParams: (firstArgs: string | IRequest | IRequestOptions, ...args: any[]) => IRequestOptions;
export default resolveParams;
