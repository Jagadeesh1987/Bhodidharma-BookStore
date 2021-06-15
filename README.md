# Bodhidharma Book Store App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Developer Comments and Notes
This project is  developed by Jagadeesh
This project has 3 Components, Namely
1. Login Components
  a. App has two users
  b. admin - Username: admin Password: admin123
  c. User - Username: user Password: user123
  
2. Book Section . I have created two child components, naamely 
   a. Manage Books - Where this page had add, edit and delete actions and these actions can be performed only by admin. Non Admin users can only view the list.
   b. Add Book - This page can be accessed only by admin. The admin user can add books to the list.
 
3. Header Component

## Key points 

1.  Data is shared between the components using @Input and  @Output events.
2.  OnLoad the Initial Book items are emitted from parent Component => Book Section
3.  Initial list is displayed in Manage Books child component.
4.  All actions like Add, Edit and Delete is emitted from child element
    a. When user clicks Add, Control is passed to parent and inturn passed to Add Book Component. Used Reactive forms for form validation.
	b. When user Clicks Edit, selected Book object is passed to parent and inturn the data is populated in Add Book Component.
	c. When user Clicks Delete, selected Id is filtered from the list and displayed.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
