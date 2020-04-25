import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMenuModule,MatIconModule,MatButtonModule,MatGridListModule,MatSelectModule,MatDialogModule,MatInputModule } from "@angular/material";
import { HttpClientModule } from  '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DummyComponent } from './thesis-form/thesis-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { DisplayTopicsComponent } from './display-topics/display-topics.component';
import { HomeComponent } from './home/home.component';
import { SearchDisplayComponent } from './search-display/search-display.component';
import { EventEmitterService } from './event-emitter.service';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DummyComponent,
    ModalComponent,
    DisplayTopicsComponent,
    HomeComponent,
    SearchDisplayComponent,
    UnderConstructionComponent,
    LoginComponent
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    NgbModule,
    MatInputModule
  ],
  providers: [ EventEmitterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
