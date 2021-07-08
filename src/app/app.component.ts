import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp1';
  public isAuth: boolean = this.cookieService.check('associationId');

  constructor(private cookieService: CookieService) {}

  logout(){
    this.cookieService.delete('associationId',"/");
    setInterval(()=>{window.location.reload();},500);

  }
}


