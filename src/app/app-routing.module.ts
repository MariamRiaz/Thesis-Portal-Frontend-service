import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './thesis-form/thesis-form.component';
import { DisplayTopicsComponent } from './display-topics/display-topics.component'
import { HomeComponent } from './home/home.component'
import { SearchDisplayComponent } from './search-display/search-display.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LoginComponent } from './login/login.component';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';
import { SupervisorDisplayTopicsComponent } from './supervisor-display-topics/supervisor-display-topics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-topic', component: DummyComponent },
  { path: 'display-topics', component: DisplayTopicsComponent },
  { path: 'search-display', component: SearchDisplayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'supervisor-dashboard', component: SupervisorDashboardComponent },
  { path: 'supervisor-display-topics', component: SupervisorDisplayTopicsComponent },
  { path: 'uc', component: UnderConstructionComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
