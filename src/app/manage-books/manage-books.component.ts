import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.scss']
})
export class ManageBooksComponent implements OnInit {
  @Output() addBtnClicked = new EventEmitter<Boolean>();
  @Output() editBtnClicked = new EventEmitter<Object>();
  @Output() deleteBtnClicked = new EventEmitter<number>();
  @Input() initialData;
  @Input() isAdmin;
  showAddBook: boolean;
  searchText: string;
  constructor() {}

   addBook(){
      this.addBtnClicked.emit(true); 
      this.editBtnClicked.emit(null);  
   }

  ngOnInit(): void {
  }

  editBook(e: any) {
    this.editBtnClicked.emit(e);
  }

  deleteBook(e: any){
    this.deleteBtnClicked.emit(e);
  }

}
