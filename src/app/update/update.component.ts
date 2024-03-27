import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
  dataid:any;
  product:any ={} 
constructor(private api:ApiService,private activeroute:ActivatedRoute){}
ngOnInit(): void {
    this.activeroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('id');
      console.log("id is ",this.dataid)
    })
    this.api.getproductbyid(this.dataid).subscribe((data:any)=>
    {
      this.product =data;
      console.log(this.product)
    })}
    update(){
this.api.updateproduct(this.product,this.dataid).subscribe((data:any)=>{
  alert("successfully updated")
  })
    }
}


