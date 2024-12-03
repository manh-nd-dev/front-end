import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', component: HeaderComponent },  // Trang dashboard (bạn có thể thay đổi theo yêu cầu)
  { path: '**', redirectTo: 'login' } // Redirect nếu không tìm thấy route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
