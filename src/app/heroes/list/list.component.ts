import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk'];
  public deletedHeros?: string;



  removeLastHeroe(): void {
    this.deletedHeros = this.heroNames.pop();
  }

}


