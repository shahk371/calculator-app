import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetchData.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberField;
  values;
  listOfNos: Array<number> = [];

  constructor(
    private fetchDataService: FetchDataService
  ) { }

  ngOnInit(): void {
    
  }
  
  getIPAddress() {
    this.fetchDataService.fetchAPIData('https://api.ipify.org?format=json').subscribe((res: any) => {
      alert(res.ip);
    })
  }

  getListOfNos() {
    this.listOfNos.push(this.numberField);
    this.listOfNos.sort((num1, num2) => num1 - num2);
    this.numberField = '';
    this.values = this.listOfNos.toString();
  }


}
