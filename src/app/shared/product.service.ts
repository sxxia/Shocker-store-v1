import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1,"The first product",1.99,3.5,"This is the first product of Shocker store.",["Apparel"]),
    new Product(2,"The second product",2.99,3.5,"This is the second product of Shocker store.",["Book"]),
    new Product(3,"The third product",3.99,2.5,"This is the third product of Shocker store.",["Merchandise"]),
    new Product(4,"The fourth product",4.99,3.5,"This is the fourth product of Shocker store.",["Apparel"]),
    new Product(5,"The fifth product",5.99,1.5,"This is the fifth product of Shocker store.",["Merchandise"]),
    new Product(6,"The sixth product",6.99,3.5,"This is the sixth product of Shocker store.",["Book"])
  ];

  private comments:Comment[] = [
    new Comment(1, 1, "2018-02-14 14:14:14", "Mike", 4, "Good product."),
    new Comment(2, 1, "2018-03-01 04:27:18", "John", 2, "need to return."),
    new Comment(3, 2, "2018-04-23 15:12:16", "Kelly", 1, "Low quality."),
    new Comment(4, 4, "2018-04-29 08:09:59", "Lucy", 5, "Excellent product, will buy again."),
    new Comment(5, 5, "2018-06-27 23:26:32", "Susan", 3, "So so.")
  ]

  constructor() { }

  getAllCategories(): string[] {
    return ["Apparel", "Merchandise", "Book"];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id:number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id:number) : Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

export class Product{

  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}

export class Comment {
  
  constructor(public id:number,
              public productId:number,
              public timestamp:string,
              public user:string,
              public rating:number,
              public content:string
    ){

    }
}
