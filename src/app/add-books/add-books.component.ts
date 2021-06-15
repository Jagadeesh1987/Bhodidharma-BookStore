import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  @Output() cancelClicked = new EventEmitter<boolean>();
  @Output() emitNewBookAdded = new EventEmitter<any>();
  @Output() isEditData = new EventEmitter<any>();
  @Input() editBookData: any;
  editBookId: number = 0;
  newBookForm: FormGroup;
  submitted = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {    
    this.newBookForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      authorName: ['', Validators.required],
      bookCategory: ['', Validators.required],
      edition: ['', Validators.required],
      price: ['', Validators.required]
  });

  if(this.editBookData) {
    this.editBookId = this.editBookData.id;
    this.newBookForm.patchValue({
      bookName: this.editBookData.bookName,
      authorName: this.editBookData.authorName,
      bookCategory: this.editBookData.bookCategory,
      edition: this.editBookData.edition,
      price: this.editBookData.price
  });
  }
  }

  get f() { return this.newBookForm.controls; }

  onSubmit() {
    debugger;
      this.submitted = true;
      if (this.newBookForm.invalid) {
          return;
      } else {
        if(this.editBookData){
          const obj = {
            ...this.newBookForm.value,
            id: this.editBookId
          }
          this.isEditData.emit(obj);
        } else {
          this.emitNewBookAdded.emit(this.newBookForm.value)
        }
        
        this.router.navigate(['/manageBook']);
      }
  }

  onReset() {
      this.submitted = false;
      this.newBookForm.reset();
      this.cancelClicked.emit(true)
  }

}
