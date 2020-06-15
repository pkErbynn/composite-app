import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ModuleWithProviders } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { App2View1Component } from './app2-view1/app2-view1.component';
import { App2View2Component } from './app2-view2/app2-view2.component';
import { App2NavComponent } from './app2-nav/app2-nav.component';

const providers = [];

@NgModule({
  declarations: [AppComponent, App2View1Component, App2View2Component, App2NavComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class App2SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers,
    };
  }
}
