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

  ngOnInit(): void{
    if (!this.isAuth)
    {
      this.router.navigate(["association/connection"]).then();
    }
    else
    {
      this.router.navigate([""]).then();
    }

  }

  logout(){
    this.cookieService.delete('associationId',"/");
    // pour laisser le temps de prendre en compte la suppression du cookie (front de la navbar)
    setInterval(()=>{window.location.reload();},500);
    this.router.navigate(["association/connection"]).then();
  }
}


