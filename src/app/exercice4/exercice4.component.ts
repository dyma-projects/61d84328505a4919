import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exo4",
  templateUrl: "./exercice4.component.html",
  styles: [],
})
export class Exercice4Component implements OnInit {
  public texts: Array<string> = ["un", "deux", "trois"];

  constructor() {}

  ngOnInit(): void {}
}
