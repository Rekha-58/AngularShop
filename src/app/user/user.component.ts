import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
//import { product } from './productmodal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  data!:any[]
  public cartitems:any=0;
  constructor(private api:ApiService){}
  ngOnInit(): void {
      this.displayproducts();
  
  
       this.api.products().subscribe(res=>{
        this.cartitems = res.length;
      })
  }

  displayproducts(){
    this.api.getproduct().subscribe(res=>{
    this.data = res;
    console.log(res)  
    })
  }
  addtocart(item:any){
    this.api.addtocart(item);
  }
  removeitem(item:any){
    this.api.removecartitem(item);
  }
  deleteproduct(id:any){
      this.api.deleteproduct(id).subscribe((res)=>{
         if(confirm("are you sure")){
          console.log("deleted")
         }
      })
      this.api.getproduct()
  }
}
