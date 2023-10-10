import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cate: any = [];
  proNike: any = [];
  constructor(private proService: ProductService, private cateService: CategoryService, private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.getAllNike();
    this.getAllCate();
  }

  getAllCate(): void {
    this.cateService.getAll().subscribe((data) => {
      this.cate = data;
    })
  }

  getAllNike(): void {
    this.proService.getAll().subscribe((data) => {
      if (data) {
        this.proNike = data;
      }
    })
  }

  addToCart(pro: any) {
    this.cartService.add(pro);
    this.route.navigate(['/cart'])
  }

}
