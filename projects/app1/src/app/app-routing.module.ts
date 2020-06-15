import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { App1View1Component } from "./app1-view1/app1-view1.component";
import { App1View2Component } from "./app1-view2/app1-view2.component";

const routes: Routes = [
  // nb: no "/" prepend
  { path: "app1/v1", component: App1View1Component },
  { path: "app1/v2", component: App1View2Component },
  { path: "app1", redirectTo: "app1/v1" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
