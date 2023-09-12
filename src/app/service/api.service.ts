import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private urlApi = "https://countryapi.io/api/all?apikey=4Dlxy5WgzmZ1ri9OplPVOyO4JJULSqZ7UL7YXu97"
  private newReleasesURL = "https://api.spotify.com/v1/browse/new-releases?limit=20"

  constructor(private http:HttpClient) {}

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi)
  }

  public getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQABDQZ476xWgv8obfSPYgiLobiDRmzyuEUyIioaucFGcJdV3a9EDI70icXkuPOQNQrdNscGgVZwGiVulHZJNRiClXUIijO6XZ8ZZebjzJgeM-Dt0ac'
    })

    return this.http.get<any>(this.newReleasesURL, {headers})
  }
}
