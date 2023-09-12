import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  paises:any[] = []
  newReleases:any[] = []
  
  constructor(private apiService:SpotifyService){}
  
  ngOnInit(): void {
      this.llenarData()
      this.recibirNewReleases()
  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.paises = Object.values(data)
    })
  }

  recibirNewReleases(){
    this.apiService.getNewReleases().subscribe(data=>{
      this.newReleases = Object.values(data.albums.items)
    })
  }
  
}
