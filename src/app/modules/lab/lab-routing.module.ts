import { RouterModule, Routes } from "@angular/router";
import { IndexLabPageComponent } from "./pages/index/index-lab-page.component";
import { LabPagesTemplateComponent } from "./pages/template/lab-pages-template.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: LabPagesTemplateComponent,
    children: [
      { path: '', component: IndexLabPageComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule {}