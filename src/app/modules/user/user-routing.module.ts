import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { TableComponent } from "./components/table/table.component";
import { FormComponent } from "./components/form/form.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: TableComponent }, 
      { path: 'new', component: FormComponent}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}