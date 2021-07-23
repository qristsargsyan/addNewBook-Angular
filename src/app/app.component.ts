import { Component } from '@angular/core';

export interface IBook{
  Author:string;
  Title:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  books:IBook[] =[{
    Author:"Hovhannes Tumanyan",
    Title:"Shunn u katun"
  },
  {
    Author:"Hovhannes Tumanyan",
    Title:"Anban huri"
  },
]
update(book:IBook){
  this.books.push(book);
}
}
