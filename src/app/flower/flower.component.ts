import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flower } from '../models/flowers';
import { FlowerService } from '../services/flowerService';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  flower:Flower
  //flowers:Flower[];
 
  myForm:FormGroup;
  constructor( private flowerService:FlowerService,private router:Router,private httpClient:HttpClient) { 
    this.flower=new Flower();
    this.flower=new Flower();
  // this.flowers=this.flowerService.getFlowerss();
   
    this.myForm=new FormGroup({
     "bid":new FormControl(null,[Validators.required]),
     "name":new FormControl(null,[Validators.required]),
     "desc":new FormControl(null,[Validators.required]),
     "price":new FormControl(null,[Validators.required]),
     "quant":new FormControl(null,[Validators.required]),
   });
  }
  public get bid():any{
    return this.myForm.get("bid");
  }

  public get name():any{
    return this.myForm.get("name");
  }
  public get desc():any{
    return this.myForm.get("desc");
  }
  public get price():any{
    return this.myForm.get("price");
  }
  public get quant():any{
    return this.myForm.get("quant");
  }

  ngOnInit(): void {
  }
  add(content:any){
     console.log(this.flower);
    
     this.flowerService.AddFlowers(this.flower).subscribe((data)=>{
      var user:Flower = data as Flower;

      this.router.navigate(["flower"])  
    });
  }
  AddFlower(){
 
    console.log(this.flower);
    this.flowerService.AddFlowers(this.flower).subscribe((data)=>{
      var user:Flower = data as Flower;
      console.log(data);
  
      this.router.navigate(["order"])  
    });
  }
 
}

  