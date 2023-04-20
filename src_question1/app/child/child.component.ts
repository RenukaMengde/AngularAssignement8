import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() public SubEvent = new EventEmitter();
  public inpText = "";
  public Submit()
  {
    this.SubEvent.emit(this.inpText);
  }

}
