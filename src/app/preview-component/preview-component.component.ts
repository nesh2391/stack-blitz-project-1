import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponentComponent } from "../dialog-component/dialog-component.component";
@Component({
  selector: "app-preview-component",
  templateUrl: "./preview-component.component.html",
  styleUrls: ["./preview-component.component.css"]
})
export class PreviewComponentComponent implements OnInit {
  @Input() item: string;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {}
}
