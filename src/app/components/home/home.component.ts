import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  paises:any[] = []
  
  constructor(private http:HttpClient){
    this.http.get("https://countryapi.io/api/all?apikey=4Dlxy5WgzmZ1ri9OplPVOyO4JJULSqZ7UL7YXu97")
    .subscribe((response:any)=>{
      console.log(response)
    })
  }
  
  ngOnInit(): void {
      
  }
  
}
