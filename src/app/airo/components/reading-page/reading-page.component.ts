import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-reading-page',
  templateUrl: './reading-page.component.html',
  styleUrls: ['./reading-page.component.scss'],
})
export class ReadingPageComponent implements OnInit {
  public user!: User;

  constructor(public router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('user');
    if (data) {
      this.user = JSON.parse(data) as User;
    }
  }

  clear() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
