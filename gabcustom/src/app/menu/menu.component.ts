import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  cliqueSurMenu():void{
    if(this.menu==false)
      this.menu=true
    else
      this.menu=false
  }
}
