import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  products = [
    { id: 1, title: 'PRO STORE', description: 'Pro Store est un logiciel simple à maîtriser. De la gestion des articles, à la vente, Pro Store vous offre tout ce qu’il faut pour une gestion sereine de votre activité :', price: '399€', image: 'assets/images/product1.jpg' },
    { id: 2, title: 'Pro Para', description: 'Pro Para is an intuitive management software for paramedical and parapharmaceutical stores :',price: '399€', image: 'assets/images/product2.jpg' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === productId);
  }

}
