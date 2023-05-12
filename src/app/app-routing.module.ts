import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletionComponent } from './pages/completion/completion.component';
import { ResumingComponent } from './pages/resuming/resuming.component';
import { StartingComponent } from './pages/starting/starting.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'startingmail',component:StartingComponent
  },
  {
    path:'resumingmail',component:ResumingComponent
  },
  {
    path:'completionmail',component:CompletionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
