import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


const  URL = 'https://www.dnd5eapi.co/api/spells'

@Injectable({
  providedIn: 'root'
 })
export class SpellService {


  constructor(private http: HttpClient) { }

  getSpellList(): Observable<any> {
    return this.http.get(URL)
  }

}

