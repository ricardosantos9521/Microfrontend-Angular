export interface LoadRemoteModuleOptions {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
}

export type Microfrontend = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
  canActivate?: any[]
};
