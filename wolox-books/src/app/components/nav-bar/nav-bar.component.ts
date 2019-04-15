import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() { }

  onLogout() {
    this.localStorage.removeValue(this.localStorage.SESSION_TOKEN);
    this.router.navigateByUrl('/login');
  }
}
