import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-dice',
  templateUrl: './roll-dice.component.html',
  styleUrls: ['./roll-dice.component.css']
})
export class RollDiceComponent implements OnInit {

  constructor() { }
  isRolling : boolean = false;
  ngOnInit(): void {

  }

  rollDice() {
    let audio = new Audio('assets/dice/audio.mp3');
    audio.load();
    audio.play();
    // var promise = audio.play();


    let dice : any = document.getElementById('dice');
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");

    setTimeout(() => {
     audio.pause()
    }, 4500);
  }
}
