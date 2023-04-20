import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public strLen ="";

  public Display(input : any)
  {
    let len = input.length;
    this.strLen = "Length of string is :" + len;
  }
}
