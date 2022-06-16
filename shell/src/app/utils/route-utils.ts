import { APP_ROUTES } from '../app.routes';
import { Microfrontend } from '../core/services/microfrontends/microfrontend.types';
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export function buildRoutes(options: Microfrontend[]): Routes {
  const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    loadChildren: () => {
      console.log(o);
      return loadRemoteModule(o)
        .then((m) => { console.log(Object.keys(m)); console.log(m); return m[o.ngModuleName] })
        .catch((error) => {
          console.log("error loading: " + error)
        })
    },
    canActivate: o.canActivate,
    pathMatch: 'full'
  }));

  return [
    ...APP_ROUTES,
    ...lazyRoutes
  ];
}
