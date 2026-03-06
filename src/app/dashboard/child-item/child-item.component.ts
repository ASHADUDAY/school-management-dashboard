import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-child-item",
  templateUrl: "./child-item.component.html",
  styleUrls: ["./child-item.component.css"],
})
export class ChildItemComponent implements OnInit {
  @Input() items: any[];
  @Input() lang: any;
  @Input() btnSelected: any = true;
  @Output() selectedBtn = new EventEmitter<boolean>();
  selectedSubmenuIndex: number | null = null;

  @ViewChild("childMenu") public childMenu;
  constructor(public router: Router) {
    console.log("constructor", this.btnSelected);
    console.log("items", this.items);
  }

  ngOnChanges() {
    console.log("ngOnChanges", this.btnSelected);
    console.log(
      "selectedSubmenuIndex in ngOnChanges",
      this.selectedSubmenuIndex,
    );
    // this.selectedSubmenuIndex = null; // Reset the selected submenu index when items change
    this.selectedBtn.emit(this.selectedSubmenuIndex !== null ? true : false);
  }
  ngOnInit() {
    console.log("btnSelected", this.btnSelected);
    console.log("items", this.items);
  }
  openCard(e, index) {
    console.log(e);
    console.log(index);
    console.log(this.items[index].openCardFlag);
    if (this.items[index].openCardFlag) {
      this.items[index].openCardFlag = 0;
    } else {
      this.items[index].openCardFlag = 1;
    }
  }

  emitSelected(index: number) {
    console.log(index);

    this.selectedSubmenuIndex = index;
    this.selectedBtn.emit(this.selectedSubmenuIndex !== null ? true : false);
  }
}
