import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private http: HttpClient, private router: Router) {}

  // Định nghĩa hàm logout
  logout() {
    this.http.post('http://localhost:8080/signout', {}).subscribe({
      next: () => {
        // Sau khi logout thành công, chuyển hướng đến trang login
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout failed', err);
      }
    });
  }
}
