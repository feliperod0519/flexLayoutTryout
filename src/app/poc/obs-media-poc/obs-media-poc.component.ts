import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Observable, of } from 'rxjs';
import { map, distinctUntilChanged  } from 'rxjs/operators';

@Component({
  selector: 'app-obs-media-poc',
  templateUrl: './obs-media-poc.component.html',
  styleUrls: ['./obs-media-poc.component.css']
})
export class ObsMediaPocComponent implements OnInit {

  showIt = false;
  bigScreens = false;
  
  constructor(private media:MediaObserver){
    
  }

  ngOnInit(): void {
    
    this.media.asObservable().pipe(map(allMediaChanges=>{
      if (allMediaChanges[0].mqAlias =='xs' || allMediaChanges[0].mqAlias == 'sm'){
        this.bigScreens = false;
        return true;
      }
      else{
        this.bigScreens = this.media.isActive('lg') || this.media.isActive('xl');
        return false;
      }
    })).subscribe(v=>{ this.showIt = v})
  }
}
