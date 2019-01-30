import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddExpencessComponent } from './components/add-expencess/add-expencess.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { RoomiesComponent } from './components/roomies/roomies.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home', component: HomeComponent, canActivate:[AuthGuard],  children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'addexpencess', component: AddExpencessComponent },
      { path: 'addreminder', component: ReminderComponent },
      { path: 'roomie', component: RoomiesComponent },
      /* keep path ** last  */
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  DashboardComponent,
  AddExpencessComponent,
  ReminderComponent,
  RoomiesComponent
]
