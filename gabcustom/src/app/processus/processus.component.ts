import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processus',
  templateUrl: './processus.component.html',
  styleUrls: ['./processus.component.scss']
})
export class ProcessusComponent implements OnInit {
  public images: string[] = [
    'assets/images/processus/1jpg.jpg',
    'assets/images/processus/2jpg.jpg',
    'assets/images/processus/3jpg.jpg',
    'assets/images/processus/4jpg.jpg',
    'assets/images/processus/5jpg.jpg',
    'assets/images/processus/6jpg.jpg',
    'assets/images/processus/7jpg.jpg',
  ];
  public _images: string = 'assets/images/processus/1jpg.jpg';
  private currentIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  _next() {
    if(this.currentIndex<this.images.length-1){
      this._images = this.images[this.currentIndex+1];
      this.currentIndex+=1;
    }else{
      this._images = this.images[0];
      this.currentIndex=0;   
    }

  }
  _prev() {
    if(this.currentIndex>0){
      this._images = this.images[this.currentIndex-1];
      this.currentIndex-=1;
    }

  }
}
