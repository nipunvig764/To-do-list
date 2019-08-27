import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MondayComponent } from './monday/monday.component';
import { SundayComponent } from './sunday/sunday.component';
import { SaturdayComponent } from './saturday/saturday.component';
import { ThursdayComponent } from './thursday/thursday.component';
import { FridayComponent } from './friday/friday.component';
import { WednesdayComponent } from './wednesday/wednesday.component';
import { TuesdayComponent } from './tuesday/tuesday.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';


const approutes: Routes = [
    {path:'',redirectTo:'/signup', pathMatch:'full'},
    {path:'signup',component:SignupComponent},
    {path:'todolist',component:TodoListComponent,canActivate:[AuthGuard]},
    {path:'monday',component:MondayComponent,canActivate:[AuthGuard]},
    {path:'tuesday',component:TuesdayComponent,canActivate:[AuthGuard]},
    {path:'wednesday',component:WednesdayComponent,canActivate:[AuthGuard]},
    {path:'thursday',component:ThursdayComponent,canActivate:[AuthGuard]},
    {path:'friday',component:FridayComponent,canActivate:[AuthGuard]},
    {path:'saturday',component:SaturdayComponent,canActivate:[AuthGuard]},
    {path:'sunday',component:SundayComponent,canActivate:[AuthGuard]},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
