import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-dice',
  templateUrl: './roll-dice.component.html',
  styleUrls: ['./roll-dice.component.css']
})
export class RollDiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  rollDice() {
    let dice : any = document.getElementById('dice');
    let outputDiv : any = document.getElementById('diceResult');
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");

    console.log(result);

    outputDiv.classList.remove("reveal");
    outputDiv.classList.add("hide");
    outputDiv.innerHTML = "You've got " + result;
    setTimeout(outputDiv.classList.add("reveal"), 1500);
}


}
