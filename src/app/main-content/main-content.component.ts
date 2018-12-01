import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  FirstName: string;
  LastName: string;
  Course: string;
}
@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      FirstName: 'Chaney',
      LastName: 'Zimmerman',
      Course: 'Progamming'
    }
    this.students[1] = {
      id: 2,
      FirstName: 'Halli',
      LastName: 'Jacobson',
      Course: 'Teaching'
    }
    this.students[2] = {
      id: 3,
      FirstName: 'Simone',
      LastName: 'Jacobson',
      Course: 'Teaching'
    }
    this.students[3] = {
      id: 4,
      FirstName: 'Josh',
      LastName: 'Robinson',
      Course: 'Partying'
    }
  }

  ngOnInit() {
  }

  addStudent() {
    const student: IStudent = {
      id: 4,
      FirstName: 'Chase',
      LastName: 'Zimmerman',
      Course: 'Freshman'
    };

    this.students.push(student);
  }

}
