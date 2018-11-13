import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) {}

  login(model: any) {
    return this.http.post("http://localhost:5000/api/auth", model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("token", user.token); // Manteve-se as duas abordagem para simplificação apenas
        }
      })
    );
  }

  // Metodo para verificar se usuario esta logado, se o token tiver expirado retorna false.
  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
  logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }
}
