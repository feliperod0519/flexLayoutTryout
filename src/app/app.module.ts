import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutComponent } from './poc/flex-layout/flex-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ObsMediaPocComponent } from './poc/obs-media-poc/obs-media-poc.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FlexLayoutComponent,
    ObsMediaPocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
