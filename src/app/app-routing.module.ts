import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './thesis-form/thesis-form.component';
import { DisplayTopicsComponent } from './display-topics/display-topics.component'
import { HomeComponent } from './home/home.component'
import { SearchDisplayComponent } from './search-display/search-display.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-topic', component: DummyComponent },
  { path: 'display-topics', component: DisplayTopicsComponent },
  { path: 'search-display', component: SearchDisplayComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
