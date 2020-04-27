import { Component, OnInit } from '@angular/core';
import { Asesoria } from '../models/Asesoria';
import { Course } from '../models/Course';
import { ModalController } from '@ionic/angular';
import { AsesoriaModalPage } from '../modals/asesoria-modal/asesoria-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private ModalController : ModalController) {}

  
  //"Test entries"
  localAsesorias = [];
  

  ngOnInit() { 
    this.localAsesorias = this.getAsesorias();
  }
  
  //"Test function"
  private getAsesorias() {
    var temp = []
    var tempcurso : Course = {
      Name : "Matematicas",
      Description : "Todo sobre matematicas"
    }
    var assesoria : Asesoria = {
      Title : "Asesoria de prueba",
      Description : "Esta asesoria es una prueba",
      Date : "20/8/2019",
      Teacher : "Juanito",
      Course : tempcurso,
    }

    temp.push(assesoria);
    console.log(temp)
    return temp
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
