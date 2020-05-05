import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  categories = [];
  products = [];
  // categoryId: number;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getCategories().subscribe(
      data => {
        if(data) {
          this.categories = data;
        } else {
          alert("No data");
        }
      },
      () => alert("Error!!")
    );

    this.productService.getProducts(1).subscribe(
      data => {
        if (data) {
          this.products = data;
        } else {
          alert("No data");
        }
      },
      () => alert("Error!!")
    );
    
  }

  getProductInCategory(id: number) {
    // this.categoryId = id;
    this.productService.getProducts(id).subscribe(
      data => {
        if (data) {
          this.products = data;
        } else {
          alert("No data");
        }
      },
      () => alert("Error!!")
    );
  }




  

}
