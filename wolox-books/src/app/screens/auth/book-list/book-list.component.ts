import { Component, OnInit } from '@angular/core';
import { BookService } from '@services/book.service';
import { BookResponse, Book } from '@models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(response => {
      if (response.status === 200) {
        response.body.forEach((book: BookResponse) => {
          this.bookList.push(new Book(book));
        });
      }
    });
  }
}
