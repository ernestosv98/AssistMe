import { Course } from './Course';

export interface Student {
    id : string,
    Name : string,
    Surname : string,
    AboutMe : string,
    PicURL : string,
    Course : Course[],
}