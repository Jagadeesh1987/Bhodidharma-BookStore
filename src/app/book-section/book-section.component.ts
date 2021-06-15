import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.scss']
})
export class BookSectionComponent implements OnInit {
  showAddBook: boolean;
  editBookData: [];
  isAdmin: boolean;

  
  initialData = [{
    id: 1,
    bookName: 'Zen Katha:The Story Of Bodhidharma',
    authorName: 'TestauthorName',
    bookCategory: 'TestbookCategory',
    edition: 'Testedition',
    price: 'Testprice',
    thumbnailImg: 'assets/images/1.jpg',
  },
  {
    id: 2,
    bookName: 'The Bodhidharma Anthology',
    authorName: 'TestauthorName',
    bookCategory: 'TestbookCategory',
    edition: 'Testedition',
    price: 'Testprice',
    thumbnailImg: 'assets/images/2.jpg',
  },
  {
    id: 3,
    bookName: 'The Zen Teaching of Bodhidharma',
    authorName: 'TestauthorName',
    bookCategory: 'TestbookCategory',
    edition: 'Testedition',
    price: 'Testprice',
    thumbnailImg: 'assets/images/3.jpg',
  },
  {
    id: 4,
    bookName: 'Tracking Bodhidharma',
    authorName: 'Andy Ferguson, George Backman',
    bookCategory: 'TestbookCategory',
    edition: 'Audible Studios on Brilliance',
    price: 'Rs.551',
    thumbnailImg: 'assets/images/4.jpg',
  },
  {
    id: 5,
    bookName: 'Bodhidharma Never Came to Hatboro and Other Poems',
    authorName: 'Tyler Doherty',
    bookCategory: 'TestbookCategory',
    edition: 'Testedition',
    price: 'Testprice',
    thumbnailImg: 'assets/images/4.jpg',
  }];

  constructor(private router: Router) { 
    if(this.router.getCurrentNavigation().extras.state){    
      this.isAdmin = this.router.getCurrentNavigation().extras.state.isCurrentUserAdmin;
    } else {
     this.isAdmin = localStorage.getItem('isAdmin') === 'true' ? true : false;
    }
    

    this.showAddBook = false;
  }

  ngOnInit(): void {
  }

  addbuttonClicked(e){
    this.showAddBook = true;
  }

  oncancelClicked(e){
    this.showAddBook = false;
  }

  addNewBook(e){
    let obj = {
      ...e,
      id: this.initialData.length + 1
    }
    this.initialData.push(obj);
    this.showAddBook = false;
  }

  populateEditdata(e){
    this.editBookData = e;
    this.showAddBook = true;     
  }

  updateBookData(e){
    const bookIndex = this.initialData.findIndex((obj => obj.id == e.id));
    let currEle = this.initialData[bookIndex];
    currEle.bookName = e.bookName;
    currEle.bookCategory = e.bookCategory;
    currEle.authorName = e.authorName;
    currEle.edition = e.edition;
    currEle.price = e.price;
    this.showAddBook = false;
  }

  deleteBook(e){
    let filteredList = this.initialData.filter((ele) => {
         return ele.id !== e
    });
    this.initialData = filteredList;
  }

}
