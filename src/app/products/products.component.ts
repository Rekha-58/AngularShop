import { Component,OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from './productmodal';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  data!:product[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
      this.displayproducts();
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
