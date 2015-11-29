import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import HttpClientConfig from 'aurelia-auth/app.httpClient.config';
import AppRouterConfig from 'router-config';
import {FetchConfig} from 'aurelia-auth';
import * as toastr from "toastr";

@inject(Router, HttpClientConfig, AppRouterConfig, FetchConfig)

export class App {
  constructor(router, httpClientConfig, appRouterConfig, FetchConfig) {

    this.router = router;
    this.httpClientConfig = httpClientConfig;
    this.appRouterConfig = appRouterConfig;
    this.fetchConfig = FetchConfig;
  };

  activate() {
    this.httpClientConfig.configure();
    this.appRouterConfig.configure();
    this.fetchConfig.configure();
  };
}
