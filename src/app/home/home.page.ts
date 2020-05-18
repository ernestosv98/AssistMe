import { Component, OnInit } from '@angular/core';
import { Asesoria } from '../models/Asesoria';
import { Course } from '../models/Course';
import { ModalController } from '@ionic/angular';
import { AsesoriaModalPage } from '../modals/asesoria-modal/asesoria-modal.page';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private ModalController : ModalController,
              private courseService : CoursesService) {}

  
  //"Test entries"
  localAsesorias = [];
  

  ngOnInit() { 
    this.getCourses()

    
  }

  getCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      this.localAsesorias = courses
    });
  }

  async openInfoModal(item) {
    const modal = await this.ModalController.create({
      component: AsesoriaModalPage,
      componentProps : {
        Item : item,
      }
    });
    await modal.present()
  }
}
