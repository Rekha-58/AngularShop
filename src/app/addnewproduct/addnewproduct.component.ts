import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from 'express';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrl: './addnewproduct.component.css'
})
export class AddnewproductComponent implements OnInit {
 constructor(private api:ApiService){}
  ngOnInit(): void {
      
  }

  adddata(data:any){
  console.log(data)
  this.api.addproduct(data).subscribe((res:any)=>{
      console.log(res);
    })
    //)
  }
  /*update(data:any){
       this.api.updateproduct(data.id,data.title).subscribe((res:any)=>{
        console.log(res);
       });
    }*/
 
}
