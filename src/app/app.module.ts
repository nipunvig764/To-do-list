import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AuthService } from './auth/auth.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MondayComponent } from './monday/monday.component';
import { TuesdayComponent } from './tuesday/tuesday.component';
import { WednesdayComponent } from './wednesday/wednesday.component';
import { ThursdayComponent } from './thursday/thursday.component';
import { FridayComponent } from './friday/friday.component';
import { SaturdayComponent } from './saturday/saturday.component';
import { SundayComponent } from './sunday/sunday.component';

import { SundayEditComponent } from './sunday/sunday-edit/sunday-edit.component';

import { TodoListEditComponent } from './todo-list/todo-list-edit/todo-list-edit.component';
import { orderListService } from './shared/todo.service';
import { MondayEditComponent } from './monday/monday-edit/monday-edit.component';
import { TuesdayEditComponent } from './tuesday/tuesday-edit/tuesday-edit.component';
import { WednesdayEditComponent } from './wednesday/wednesday-edit/wednesday-edit.component';
import { ThursdayEditComponent } from './thursday/thursday-edit/thursday-edit.component';
import { FridayEditComponent } from './friday/friday-edit/friday-edit.component';
import { SaturdayEditComponent } from './saturday/saturday-edit/saturday-edit.component';
import { MondayService } from './shared/monday.service';
import { TuesdayService } from './shared/tuesday.service';
import { WednesdayService } from './shared/wednesday.service';
import { ThursdayService } from './shared/thursday.service';
import { SaturdayService } from './shared/saturday.service';
import { FridayService } from './shared/friday.service';
import { DataStorageService } from './shared/datastorage.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CockpitComponent,
    ServerElementComponent,
    SignupComponent,
    SigninComponent,
    TodoListComponent,
    MondayComponent,
    TuesdayComponent,
    WednesdayComponent,
    ThursdayComponent,
    FridayComponent,
    SaturdayComponent,
    SundayComponent,
    SundayEditComponent,
    TodoListEditComponent,
    MondayEditComponent,
    TuesdayEditComponent,
    WednesdayEditComponent,
    ThursdayEditComponent,
    FridayEditComponent,
    SaturdayEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService,orderListService,MondayService,TuesdayService,WednesdayService,ThursdayService,SaturdayService,FridayService,DataStorageService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
