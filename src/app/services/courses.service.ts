import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private afs: AngularFirestore) { }

  getCourses() {
    return this.afs.collection('courses').snapshotChanges().pipe(
      map(docs => docs.map(doc => {
        const course = doc.payload.doc.data() as any;
        const id = doc.payload.doc.id
        var temp : Course = {
          id: id,
          Name : course.Name,
          Description : course.Description
        }
        return temp;
      }))
    );
  }

  addCourse(course: Course)  {
    return this.afs.collection('courses').add(course);
  }

  removeCourse(id) {
    return this.afs.collection('courses').doc(id).delete();
  }

  updateCourse(course : Course){
    return this.afs.collection('courses').doc(course.id).update(course)
  }


}
