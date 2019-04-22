export class Book {
  author: string;
  description: string;
  id: number;
  genre: string;
  imageUrl: string;
  publisher: string;
  title: string;
  year: number;

  constructor(book?) {
    book = book || '';
    this.author = book.author || null;
    this.description = book.description || null;
    this.id = book.id || null;
    this.genre = book.genre || null;
    this.imageUrl = book.image_url || null;
    this.publisher = book.publisher || null;
    this.title = book.title || null;
    this.year = book.year || null;
  }
}


export interface BookResponse {
  author: string;
  description: string;
  id: number;
  genre: string;
  image_url: string;
  publisher: string;
  title: string;
  year: number;
}
