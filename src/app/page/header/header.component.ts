import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.items.length;
    this.cartService.totalCart.subscribe((data) => {
      this.cart = data;
    })
  }

}
