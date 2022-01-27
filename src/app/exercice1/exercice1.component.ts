import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public fontWeight: string = "bold";

  public changeFontWeight(newFontWeight: string): void {
    this.fontWeight = newFontWeight;
  }

  nom: string;
  constructor() {
    this.nom = "premier exercice";
  }

  ngOnInit(): void {}
}
