import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-embeded-editor",
  templateUrl: "./embeded-editor.component.html",
  styleUrls: ["./embeded-editor.component.css"]
})
export class EmbededEditorComponent implements OnInit {
  quillEditorRef;
  htmlText: string = "";
  htmlTextLenght: number = this.htmlText.length;
  maxUploadFileSize = 1000000;
  remainingInputSize: string = (
    (this.maxUploadFileSize * 10 - this.htmlTextLenght) /
    this.maxUploadFileSize
  ).toFixed(2);

  constructor() {}

  ngOnInit() {}

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    console.log(this.quillEditorRef);
    const toolbar = editorInstance.getModule("toolbar");
    toolbar.addHandler("image", this.imageHandler);
  }
  onContentChanged($event) {
    console.log("content changed ", this.htmlText.length);
    this.htmlTextLenght = this.htmlText.length;
    this.remainingInputSize = (
      (this.maxUploadFileSize * 10 - this.htmlText.length) /
      this.maxUploadFileSize
    ).toFixed(2);
  }

  imageHandler = (image, callback) => {
    const input = <HTMLInputElement>document.getElementById("fileInputField");
    document.getElementById("fileInputField").onchange = () => {
      let file: File;
      file = input.files[0];
      // file type is only image.
      if (/^image\//.test(file.type)) {
        if (file.size > this.maxUploadFileSize) {
          alert("Image needs to be less than 1MB");
        } else {
          const reader = new FileReader();
          reader.onload = () => {
            const range = this.quillEditorRef.getSelection();
            const img = '<img src="' + reader.result + '" />';
            this.quillEditorRef.clipboard.dangerouslyPasteHTML(
              range.index,
              img
            );
          };
          reader.readAsDataURL(file);
        }
      } else {
        alert("You could only upload images.");
      }
    };

    input.click();
  };
}
