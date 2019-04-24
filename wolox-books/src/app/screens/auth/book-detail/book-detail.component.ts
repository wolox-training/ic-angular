import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '@models/book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '@services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.bookService.getBook(params.id).subscribe(response => {
          if (response.status === 200) {
            this.book = new Book(response.body);
          }
        });
      }
    }, (err) => {
      console.log(`Error code: ${err.status}`);
      console.log(`Error Body: ${JSON.stringify(err.error)}`);
    });
  }
}
