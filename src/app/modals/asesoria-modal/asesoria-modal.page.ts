import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-asesoria-modal',
  templateUrl: './asesoria-modal.page.html',
  styleUrls: ['./asesoria-modal.page.scss'],
})
export class AsesoriaModalPage implements OnInit {


  constructor(private ModalController : ModalController) { }

  @Input() Item;

  ngOnInit() {
  }

  dismiss(){
    this.ModalController.dismiss({
      'dismissed': true
    });
  }

}
