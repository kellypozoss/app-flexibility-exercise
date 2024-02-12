import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public weight: number = 0;
  public size: number = 0;
  public gender: number = 1;

  public sendData(): void {
    console.log(this.weight + ', ' + this.size + ', ' + this.gender);
  }
}
