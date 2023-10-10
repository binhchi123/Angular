import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listCart: any = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCart = this.cartService.items;
  }

  updateCart(product: any, e: any): void {
    // this.cartService.updateCart(product, e.target.value);
    console.log(e.target.id)
    let qty = product.quantity
    if (e.target.id === 'tang') {
      qty++;
    }
    if (e.target.id === 'tru') {
      qty--;
    }
  }

  delete(id: number) {
    return this.cartService.delete(id);
  }

}
