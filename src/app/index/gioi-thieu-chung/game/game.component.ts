import { Location } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: any;
  activePage: number = 15;
  listAnswer: number[] = [3, 2, 1, 1, 4, 3, 3, 3, 2, 1];

  countWrongAnswer: number = 0;
  countCorrectAnswer: number = 0;
  point: number = 0;

  isDisplayPointPlus: boolean = false;
  isPlaying: boolean = true;
  musicNoteImg: string = '/assets/game/play-music.png';
  orientation: boolean = false;

  constructor(private readonly _location: Location) {}

  ngOnInit(): void {
    if (window.screen.width < 900) {
      if (window.orientation === 90 || window.orientation === -90) {
        let flipbook = document.getElementById('flipbook');
        if (flipbook) {
          flipbook.style.display = 'flex';
        }
        this.orientation = false;
      } else {
        let flipbook = document.getElementById('flipbook');
        if (flipbook) {
          flipbook.style.display = 'none';
        }
        this.orientation = true;
      }
    }
  }

  toggleAudio() {
    if (this.isPlaying) {
      this.audioPlayer.nativeElement.pause();
      this.musicNoteImg = '/assets/game/mute-music.png';
    } else {
      this.audioPlayer.nativeElement.play();
      this.musicNoteImg = '/assets/game/play-music.png';
    }
    this.isPlaying = !this.isPlaying;
  }

  checkAnswer(questNum: number, chosenAnswer: number, event: any) {
    let element = event?.target;
    if (this.listAnswer[questNum - 1] == chosenAnswer) {
      this.countCorrectAnswer += 1;
      this.point += 100;
      if (element) {
        element.style.backgroundColor = 'green';
        element.style.color = 'white';
        this.onCorrectAnswer();
      }
    } else {
      this.countWrongAnswer += 1;
      if (element) {
        element.style.backgroundColor = 'red';
        element.style.color = 'white';
      }
    }

    var answerElements = document.getElementsByClassName('answer');

    // Loop through each element and set the style
    for (var i = 0; i < answerElements.length; i++) {
      var answerElement = answerElements[i] as HTMLElement; // Cast to HTMLElement
      answerElement.style.pointerEvents = 'none';
    }

    setTimeout(() => {
      this.nextPage();
      for (var i = 0; i < answerElements.length; i++) {
        var answerElement = answerElements[i] as HTMLElement; // Cast to HTMLElement
        answerElement.style.pointerEvents = 'auto';
      }
    }, 1500);
  }

  onCorrectAnswer() {
    this.isDisplayPointPlus = true;

    setTimeout(() => {
      this.isDisplayPointPlus = false;
    }, 1000);
  }

  nextPage() {
    this.activePage += 1;
  }
  cancel() {
    this._location.back();
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: Event): void {
    if (window.screen.width < 900) {
      if (window.orientation === 90 || window.orientation === -90) {
        let flipbook = document.getElementById('flipbook');
        if (flipbook) {
          flipbook.style.display = 'flex';
        }
        this.orientation = false;
      } else {
        let flipbook = document.getElementById('flipbook');
        if (flipbook) {
          flipbook.style.display = 'none';
        }
        this.orientation = true;
      }
    }
  }
}
