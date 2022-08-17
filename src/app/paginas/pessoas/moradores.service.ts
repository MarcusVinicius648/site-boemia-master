import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoradoresService {

  constructor(private http: HttpClient) { }

  getMoradores() {
    return this.http.get("assets/pessoas/moradores.json");
  }
  getExalunos() {
    return this.http.get("assets/pessoas/exalunos.json");
  }
  getHomenageados() {
    return this.http.get("assets/pessoas/homenageados.json");
  }
}
