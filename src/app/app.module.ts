import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingComponent } from './pages/starting/starting.component';
import { ResumingComponent } from './pages/resuming/resuming.component';
import { CompletionComponent } from './pages/completion/completion.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:[
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule
  ],
  // declarations: [
  //   SearchComponent,
  // ],
})
export class MaterialModule {};

@NgModule({
  declarations: [
    AppComponent,
    StartingComponent,
    ResumingComponent,
    CompletionComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
