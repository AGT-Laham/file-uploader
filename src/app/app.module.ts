import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { JsonFileComponent } from './json-file/json-file.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '' , component: UploadFileComponent},
  {path: 'upload-file' , component: UploadFileComponent},
  {path: 'json-file' , component: JsonFileComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadFileComponent,
    JsonFileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
