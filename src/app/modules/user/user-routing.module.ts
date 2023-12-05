import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexPageComponent } from "./pages/index/index.component";
import { UserTemplateComponent } from "./pages/template/user-template.component";
import { NewUserPageComponent } from "./pages/new/new-user.component";
import { EditUserPageComponent } from "./pages/edit/edit-user.component";

const routes: Routes = [
  {
    path: '',
    component: UserTemplateComponent,
    children: [
      { path: '', component: IndexPageComponent }, 
      { path: 'new', component: NewUserPageComponent },
      { path: ':id', component: EditUserPageComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}