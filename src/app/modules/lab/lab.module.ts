import { NgModule } from "@angular/core";
import { LabPagesTemplateComponent } from "./pages/template/lab-pages-template.component";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { IndexLabPageComponent } from "./pages/index/index-lab-page.component";
import { LabRoutingModule } from "./lab-routing.module";

@NgModule({
  declarations: [
    LabPagesTemplateComponent,
    IndexLabPageComponent
  ],
  imports: [
    CommonModule,
    LabRoutingModule,
    MatCardModule
  ], 
})
export class LabModule {
  
}