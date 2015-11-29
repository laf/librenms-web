import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import HttpClientConfig from 'aurelia-auth/app.httpClient.config';
import {FetchConfig} from 'aurelia-auth';
import AppRouterConfig from 'router-config';
import * as toastr from "toastr";
import * as fetch from 'fetch';

@inject(Router,HttpClientConfig,FetchConfig, AppRouterConfig)

export class App {
  constructor(router, httpClientConfig, fetchConfig, appRouterConfig) {

    this.router = router;
    this.fetchConfig = fetchConfig;
    this.appRouterConfig = appRouterConfig;
    this.fetchConfig = fetchConfig;
  };

  activate() {
    this.fetchConfig.configure();
    this.appRouterConfig.configure();
    this.fetchConfig.configure();
  };
}
