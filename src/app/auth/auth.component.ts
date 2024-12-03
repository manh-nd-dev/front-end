import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('http://localhost:8080/api/auth/signin', { username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          // Xử lý nếu đăng nhập thành công
          this.errorMessage = 'Đăng nhập thành công';
          this.router.navigate(['/login']); // Ví dụ chuyển hướng tới trang Dashboard
        },
        error: (err) => {
          this.errorMessage = 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.';
        }
      });
  }
}
