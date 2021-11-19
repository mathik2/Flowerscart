import { Component, OnInit } from '@angular/core';
import { Flower } from '../models/flowers';
import { FlowerService } from '../services/flowerService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  flower:Flower
  selectedFlower:Flower
  flowers:Flower[];
  tmpFlower:Flower;
  constructor(private flowerService:FlowerService) { 
    this.tmpFlower=new Flower();
    this.flower = new Flower();
    this.flowers = this.flowerService.getSummaryFlowers();
    this.selectedFlower = new Flower();
    
  }

  ngOnInit(): void {
  }
  getPrice(){
    //return  this.flowerService.getTotallSum()
       var total:number = 0;
       this.flowers.forEach(element => {
       total +=element.price*element.qty;
      
    });
    return total;
   }
  /*   removeFlower(id:any){
     this.flowerService.removeFlower(id); 
 }
 */
 removeFlower(id:any){
  this.flowerService.removeFlower(id);
}
}
