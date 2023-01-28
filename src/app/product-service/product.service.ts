import {Injectable} from '@angular/core';
// @ts-ignore
import {ProductModel} from "../model/ProductModel";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  nextProductId: number = 1
  productList: ProductModel[] = []

  constructor() {
  }

  dodajProduct(nowyProduct: ProductModel): void {
    nowyProduct.id = this.nextProductId++
    this.productList.push(nowyProduct)
  }

  usunProductWSerwisie(id: number): void {
    let znalezionyProduct;
    for (const product of this.productList) {
      if (product.id == id) {
        znalezionyProduct = product;
        break;
      }
    }

    if (znalezionyProduct == undefined){
      return
    }

    const index = this.productList.indexOf(znalezionyProduct, 0)
    this.productList.splice(index, 1)
  }
}
