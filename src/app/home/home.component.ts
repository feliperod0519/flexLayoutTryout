import { Component } from '@angular/core';
import {Product,ProductService} from '../services/product.service';
import {Observable,of} from 'rxjs';
import {map} from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  readonly columns$: Observable<number>=of(0);
  readonly products$: Observable<Product[]>=of([] as (Product[]));

  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ],
  ]);

  constructor(private media: MediaObserver, private productService: ProductService){
    this.products$ = this.productService.getAll();
    this.columns$ = this.media.asObservable().pipe(
      map(mc=><number>this.breakpointsToColumnsNumber.get(mc[0].mqAlias))
    )
  }

}
