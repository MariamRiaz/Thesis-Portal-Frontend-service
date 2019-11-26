import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ThesisTopicsComponent } from './thesis-topics/thesis-topics.component'


const routes: Routes = [ 
  { path: '', component: BodyComponent },
  { path: 'home', component: BodyComponent },
  { path: 'thesis-topics', component: ThesisTopicsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
