import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
   return this.http.get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")

  }
  getAllPromise(){
    return lastValueFrom(this.http.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true'))
  }
  getAllPipe(){
    return lastValueFrom(this.http.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true').pipe(map((value:any)=>value.data)))
  }
  getById(uuid:string){
    return lastValueFrom(this.http.get(`https://valorant-api.com/v1/agents/${uuid}`))
  }

}
