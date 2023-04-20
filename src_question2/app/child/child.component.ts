import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public MsgfromParent = "";
  @Output() public myEve = new EventEmitter();

  public SendMessage() {
    this.myEve.emit("Hello from Child!!");
  }
}
