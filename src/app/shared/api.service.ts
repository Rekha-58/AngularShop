import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../products/productmodal';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartitemlist:any= []
  public productlist = new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }
  getproduct(){
    return this.http.get<product[]>("https://65d4439e3f1ab8c63434bf2c.mockapi.io/api/products/item")
  }
  getproductbyid(id:string){
    return this.http.get('https://65d4439e3f1ab8c63434bf2c.mockapi.io/api/products/item/'+id)

  }
  addtocart(data:product[]){
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist)
    console.log(this.cartitemlist)
  }
  products(){
    return this.productlist.asObservable();
  }
  removecartitem(data:any){
    this.cartitemlist.map((a:product,index:product)=>{
      if(data.id == a.id){
        this.cartitemlist.splice(index,1)
      }
    })
    this.productlist.next(this.cartitemlist)
  }
  /*additemapi(item:product){
    return this.http.delete('https://65d4439e3f1ab8c63434bf2c.mockapi.io/api/products/item')
  }*/
  addproduct(data:any){
    return this.http.post("https://65d4439e3f1ab8c63434bf2c.mockapi.io/api/products/item",data)
  }
  deleteproduct(id:any){
    return this.http.delete("https://65d4439e3f1ab8c63434bf2c.mockapi.io/api/products/item/"+id)
  }
  
  updateproduct(product:any,id:number){
    return this.http.put<product[]>("https://65d4439e3f1ab8c63434bf2c.mockapi.io/api/products/item/"+id,product)

  }
}
