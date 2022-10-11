import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private api:ApiService) {
    this.fetchdata()
   }

  fetchdata=()=>{
    this.api.photo().subscribe(
      (data)=>{
        this.photoData=data
      }
    )
  }

photoData:any=[]
  ngOnInit(): void {
  }

}
