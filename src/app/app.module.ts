import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EmbededEditorComponent } from "./embeded-editor/embeded-editor.component";
import { QuillModule } from "ngx-quill";
import { DemoMaterialModule } from "./material-module";
import { DialogComponentComponent } from "./dialog-component/dialog-component.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PreviewComponentComponent } from "./preview-component/preview-component.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    QuillModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EmbededEditorComponent,
    DialogComponentComponent,
    PreviewComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
