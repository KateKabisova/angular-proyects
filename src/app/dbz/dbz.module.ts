import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/mai-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainDbzComponent, ListComponent, AddCharacterComponent],
  exports: [MainDbzComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
