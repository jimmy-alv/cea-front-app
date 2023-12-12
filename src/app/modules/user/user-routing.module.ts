import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexPageComponent } from "./pages/index/index.component";
import { UserTemplateComponent } from "./pages/template/user-template.component";
import { NewUserPageComponent } from "./pages/new/new-user.component";
import { EditUserPageComponent } from "./pages/edit/edit-user.component";
import { userGuard } from "./guards/user.guard";

const routes: Routes = [
  {
    path: '',
    component: UserTemplateComponent,
    children: [
      { path: '', canActivate: [userGuard], component: IndexPageComponent }, 
      { path: 'new', canActivate: [userGuard], component: NewUserPageComponent },
      { path: ':id', canActivate: [userGuard], component: EditUserPageComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}