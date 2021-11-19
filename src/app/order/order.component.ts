import { Component, OnInit } from '@angular/core';
import { Flower } from '../models/flowers';
import { FlowerService } from '../services/flowerService';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  flower:Flower
  selectedFlower:Flower
 // flowers:Flower[];
  flowerss:Flower[]=[];
  tmpFlower:Flower;
  constructor(private flowerService:FlowerService) { 
    this.tmpFlower=new Flower();
    this.flower = new Flower();
    //this.flowers=this.flowerService.getFlowerss();
    this.selectedFlower = new Flower();
    this.flowerService. getFlowerss().subscribe((data)=>{
      this.flowerss=data as Flower[];

    })
  }

  ngOnInit(): void {
  }
  AddFlowers(id:any){
    this.flowerService.AddFlowers(id);
}
}