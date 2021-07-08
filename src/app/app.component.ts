import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp1';
  public isAuth: boolean = this.cookieService.check('associationId');

  constructor(private cookieService: CookieService,private router: Router) {}

  logout(){
    this.cookieService.delete('associationId',"/");
    setInterval(()=>{window.location.reload();},500);
    this.router.navigate(["association/connection"]);
  }
}


