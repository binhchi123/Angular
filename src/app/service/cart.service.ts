import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item: any = [];
  items: any = [];
  totalCart = new Subject<number>();
  constructor(private http: HttpClient) {
    let listCart: any = localStorage.getItem('cart');
    this.items = listCart ? JSON.parse(listCart) : [];
  }

  checkProduct(product: any) {
    this.items.findIndex((item: any) => {
      return item.id == product.id;
    })
  }

  add(product: any): void {
    // console.log(product)
    // this.items.push(product);
    // localStorage.setItem('cart', JSON.stringify(this.items));

    let index = this.items.findIndex((item: any) => {
      return item.id == product.id;
    })
    if (index > -1) {
      this.items[index].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(this.items));
    } else {
      // this.item.id = product.id;
      // this.item.name = product.name;
      // this.item.img = product.img;
      // this.item.salePrice = product.salePrice;
      // this.items.quantity = 1;

      product.quantity = 1;
      this.items.push(product);
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
    this.totalCart.next(this.items.length)

  }

  updateCart(product: any, quantity: any): void {
    let index: any = this.checkProduct(product);
    if (index > -1) {
      this.items[index].quantity = quantity;
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
    this.totalCart.next(this.items.length);
  }

  delete(id: number): void {
    let index = this.items.findIndex((item: any) => {
      return item.id == id;
    })
    this.items.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}
