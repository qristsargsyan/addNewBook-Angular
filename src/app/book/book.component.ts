import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../app.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() bk!:IBook

  constructor() { }

  ngOnInit(): void {
  }

}
