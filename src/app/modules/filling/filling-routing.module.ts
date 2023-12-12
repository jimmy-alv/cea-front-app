import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexFillingPageComponent } from "./pages/index/index-filling-page.component";
import { FillingPagesTemplateComponent } from "./pages/template/filling-pages-template.component";

const routes: Routes = [
  {
    path: '',
    component: FillingPagesTemplateComponent,
    children: [
      { path: '', component: IndexFillingPageComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FillingRoutingModule {}