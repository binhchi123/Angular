import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: any;
  constructor(private productService: ProductService, private router: ActivatedRoute, private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    this.productService.detail(id).subscribe((data) => {
      this.product = data;
    })
    console.log(this.product);
    console.log(id);
  }

  addToCart(product: any) {
    this.cartService.add(product);
    this.route.navigate(['/cart'])
  }

}
