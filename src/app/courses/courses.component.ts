import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  FirstName: string;
  LastName: string;
  Course: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  students: Array<IStudent> = [];

  editMode: boolean = false;
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
    this.editMode = true;
    const student: IStudent = {
      id: null,
      FirstName: null,
      LastName: null,
      Course: null
    };

    // this.students.push(student);
    this.students.unshift(student);
  }

  removeStudent(index: number) {
    console.log('from removeStudent function index: ', index);
    this.students.splice(index, 1)
  }

  saveStudent() {
    this.editMode = false;
  }


}
