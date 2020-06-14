import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ModuleWithProviders } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { App1View1Component } from './app1-view1/app1-view1.component';
import { App1View2Component } from './app1-view2/app1-view2.component';
import { App1NavComponent } from './app1-nav/app1-nav.component';
// import { AppModule } from "src/app/app.module";

const providers = [];

@NgModule({
  declarations: [AppComponent, App1View1Component, App1View2Component, App1NavComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers,
    };
  }
}
