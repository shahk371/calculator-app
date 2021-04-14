import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

  fisrtStarPattern: String;
  secondStarPattern: String;
  firstStringValue: String;
  secondStringValue: String;
  fisrtStringPattern: String;
  secondStringPattern: String;

  constructor() { }

  ngOnInit(): void {
    this.fisrtStarPattern = this.printFirstStarPattern(3, '*');
    this.secondStarPattern = this.printSecondStarPattern(3, '*');
  }

  printFirstStarPattern(n, patt) {
    let string = "";
    // Upside pyramid
    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        string += " ";
      }
      for (let k = 0; k < i * 2 - 1; k++) {
        string += (patt === '*') ? patt : patt.charAt(k);
      }
      string += "\n";
    }
    // downside pyramid
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      for (let k = (n - i) * 2 - 1; k > 0; k--) {
        string += (patt === '*') ? patt : patt.charAt(k);
      }
      string += "\n";
    }
    return string;
  }

  printSecondStarPattern(n, patt) {
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      for (let k = 0; k < (n - i) * 2 - 1; k++) {
        string += (patt === '*') ? patt : patt.charAt(k);
      }
      string += "\n";
    }
    // pyramid pattern
    for (let i = 2; i <= n; i++) {
      for (let j = n; j > i; j--) {
        string += " ";
      }
      for (let k = 0; k < i * 2 - 1; k++) {
        string += (patt === '*') ? patt : patt.charAt(k);
      }
      string += "\n";
    }
    return string;
  }

  printFirstAlphabetPattern() {
    const val1 = (this.firstStringValue.length / 2) + 1;
    this.fisrtStringPattern = this.printFirstStarPattern(Math.floor(val1), this.firstStringValue)
  }

  printSecondAlphabetPattern() {
    const val2 = (this.firstStringValue.length / 2) + 1;
    this.secondStringPattern = this.printSecondStarPattern(Math.floor(val2), this.secondStringValue)
  }



}
