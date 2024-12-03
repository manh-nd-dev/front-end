import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component'; // Import HeaderComponent
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Import HeaderComponent
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms';  // Add this import

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // Thêm HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
