import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { App2View1Component } from "./app2-view1/app2-view1.component";
import { App2View2Component } from "./app2-view2/app2-view2.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  // no "/" prepend
  { path: "app2/v1", component: App2View1Component },
  { path: "app2/v2", component: App2View2Component },
  { path: "app2", component: AppComponent },
  // { path: "app2", redirectTo: "app2/v1" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
