import { Course } from './Course';

export interface Teacher {
    Name : string,
    Surname : string,
    AboutMe : string,
    PicURL : string,
    Course : Course[],
}