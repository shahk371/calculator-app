import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: String;
  secondNumber: String;
  output: Number;
  isError: Boolean;
   
  constructor() { }

  ngOnInit(): void {
  }

  performCalculation(op) {
    switch(op) {
      case '+' :
        this.output = Number(this.firstNumber) + Number(this.secondNumber);
        break;
      case '-' :
        this.output = Number(this.firstNumber) - Number(this.secondNumber);
        break;
      case '*' :
        this.output = Number(this.firstNumber) * Number(this.secondNumber);
        break;
      case '/' :
        this.output = Number(this.firstNumber) / Number(this.secondNumber);
        break;
    }
  }

}
