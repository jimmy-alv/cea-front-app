import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FillingRoutingModule } from "./filling-routing.module";
import { MatCardModule } from "@angular/material/card";
import { FillingPagesTemplateComponent } from "./pages/template/filling-pages-template.component";
import { IndexFillingPageComponent } from "./pages/index/index-filling-page.component";

@NgModule({
  declarations: [
    FillingPagesTemplateComponent, 
    IndexFillingPageComponent
  ],
  imports: [
    CommonModule,
    FillingRoutingModule,
    MatCardModule,
  ], 
})
export class FillingModule {}