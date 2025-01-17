import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/mai-page.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MainDbzComponent,
  ],
  exports: [
    MainDbzComponent,
  ]
})
export class DbzModule { }
