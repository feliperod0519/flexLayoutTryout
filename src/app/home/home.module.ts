import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home.component';

@NgModule({ 
    declarations: [HomeComponent],
    imports: [ CommonModule,
               FlexLayoutModule,
               MatGridListModule,
               RouterModule.forChild([{path:'',component:HomeComponent}]) 
             ]})
export class HomeModule{}
