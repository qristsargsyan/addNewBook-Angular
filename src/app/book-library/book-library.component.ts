import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IBook } from '../app.component';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.css']
})
export class BookLibraryComponent implements OnInit {

  author = '';
  title = ''

  @Output() sendbook:EventEmitter<IBook> = new EventEmitter<IBook>();

  constructor() { }

  ngOnInit(): void {
  }

  addBook(){
    if(this.title.trim() && this.author.trim()){

    }
    const bookList:IBook={
Author:this.author,
Title:this.title
    }

    this.sendbook.emit(bookList);
    this.title=this.author='';
    
  }
}
