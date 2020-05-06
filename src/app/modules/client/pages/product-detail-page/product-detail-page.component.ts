import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../dto/product.model';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  categotyId: string;
  productId: string;
  product: ProductModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.categotyId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');

    this.productService.getProductById(this.categotyId, this.productId).subscribe(
      data => {
        if(data) {
          this.product = data;
          console.log(this.product);
          
        } else alert("No data");
      },

      () => alert("Error!")
    );
    
  }

}
