import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  showproduct:any=[];

  constructor(private api:ApiService){}
ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.showproduct = res;
    })
}
deleteitem(item:any){
  this.api.removecartitem(item);
}
}
