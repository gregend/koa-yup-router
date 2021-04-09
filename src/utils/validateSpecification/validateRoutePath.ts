import type { RouteConfig } from '../../@types';

export default function validateRoutePath(path: RouteConfig['path']): string | RegExp {
    if (typeof path !== 'string' && !((path as any) instanceof RegExp)) {
        throw new Error('Invalid route path');
    }

    return path;
}
