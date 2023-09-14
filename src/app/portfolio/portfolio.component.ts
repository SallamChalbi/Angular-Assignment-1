import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgsPath:string[] = [
    "./assets/imgs/poert1.png",
    "./assets/imgs/port2.png",
    "./assets/imgs/port3.png",
    "./assets/imgs/poert1.png",
    "./assets/imgs/port2.png",
    "./assets/imgs/port3.png"
  ]
  imgIndex:string = ''

  modelPagh(indImg:string):void{
      this.imgIndex = indImg;
      document.querySelector('.model__')?.classList.remove('d-none')
  }

  addNone():void{
    document.querySelector('.model__')?.classList.add('d-none')
  }
}

