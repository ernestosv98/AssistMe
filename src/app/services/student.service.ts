import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private afs: AngularFirestore) { }



  registerStudent(student: Student)  {
    return this.afs.collection('students').add(student);
  }

  removeStudent(id) {
    return this.afs.collection('students').doc(id).delete();
  }

  updateStudent(student : Student){
    return this.afs.collection('students').doc(student.id).update(student)
  }
}
