import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/container', pathMatch: 'full' },
  { path: 'container', component: ContainerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
