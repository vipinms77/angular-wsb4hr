import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  numberString;
  array: any[] = [];
  search:any;
  result: boolean;
  onClick(){
    if(this.numberString.trim()){
      this.array = this.numberString.split(',').map(x=>x.trim());
      if(this.array.length > 0 && this.search){
        this.result = this.binarySearch(this.array,this.search);
      }
    } 
  }
  binarySearch(arr:any[], search){
      let left = 0;
      let right = arr.length - 1;
      arr.sort();
      while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == search) {
            return true;
        }
        if (arr[mid] < search) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
      }
      return false;
  }
}
