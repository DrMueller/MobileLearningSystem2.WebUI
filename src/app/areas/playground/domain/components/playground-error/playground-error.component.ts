import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground-error',
  templateUrl: './playground-error.component.html',
  styleUrls: ['./playground-error.component.scss']
})
export class PlaygroundErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public throwErrorClicked(): void {
    throw new Error('Hello from the Playground.');
  }
}
