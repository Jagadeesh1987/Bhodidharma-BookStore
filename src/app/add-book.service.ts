import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AddBookService {
  constructor() {}
  newBookData = [{
    bookname: 'Testname',
    authorName: 'TestauthorName',
    bookCategory: 'TestbookCategory',
    edition: 'Testedition',
    price: 'Testprice',
    thumbnailImg: 'TestthumbnailImg',
  },
  {
    bookname: 'Testname',
    authorName: 'TestauthorName',
    bookCategory: 'TestbookCategory',
    edition: 'Testedition',
    price: 'Testprice',
    thumbnailImg: 'TestthumbnailImg',
  },
  {
    bookname: 'Testname',
    authorName: 'TestauthorName',
    bookCategory: 'TestbookCategory',
    edition: 'Testedition',
    price: 'Testprice',
    thumbnailImg: 'TestthumbnailImg',
  },
  {
    bookname: 'Testname',
    authorName: 'TestauthorName',
    bookCategory: 'TestbookCategory',
    edition: 'Testedition',
    price: 'Testprice',
    thumbnailImg: 'TestthumbnailImg',
  },
  {
    bookname: 'Testname',
    authorName: 'TestauthorName',
    bookCategory: 'TestbookCategory',
    edition: 'Testedition',
    price: 'Testprice',
    thumbnailImg: 'TestthumbnailImg',
  }]
  newBookSubject = new Subject<any>();

  public getBooksAdded() {
    return this.newBookSubject.asObservable();
  }

  public setBooksAdded(newBookData: any) {
    this.newBookData.push(newBookData)
    this.newBookSubject.next(this.newBookData);
  }
}

