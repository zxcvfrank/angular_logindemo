import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  status: boolean;
  subscription: Subscription;

  constructor(
    private service: UsersService,
    private router: Router) {}

  ngOnInit() {
    this.subscription = this.service.authNavStatus$.subscribe(status => this.status = status);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/home']);
  }
}
