import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

    private handlers: { [key: string]: DetachedRouteHandle } = {};


    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log('should detach');
        return true;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        console.log('store');
        this.handlers[route.url.join('/') || route.parent.url.join('/')] = handle;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.log('shouldAttach');
        const url: string = route.url.join('/') || route.parent.url.join('/');
        return !!this.handlers[url];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        console.log('retrieve');
        return this.handlers[route.url.join('/') || route.parent.url.join('/')];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.log('shouldReuseRoute');
        return future.routeConfig === curr.routeConfig;
    }

}
