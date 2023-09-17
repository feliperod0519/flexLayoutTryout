import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutComponent } from './poc/flex-layout/flex-layout.component';
import { ObsMediaPocComponent } from './poc/obs-media-poc/obs-media-poc.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'poc',component:FlexLayoutComponent},
  {path:'obs-media',component:ObsMediaPocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
