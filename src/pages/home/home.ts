import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage()

export class HomePage {

  nomes : any[] = [
    { 'nome' : 'CS'},
    { 'nome' : 'Mortal Kombat'},
    { 'nome' : 'Call Of Dutty'},
    { 'nome' : 'Pes 2019'},
    { 'nome' : 'Fifa 2019'},
  ];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }

  olaMundo(){
    console.log('Ola Mundo Mobile!')
    this.showAlert();
  }

  irParaTeste(){
    this.navCtrl.push('TesteIonicPage');
  }

    showAlert() {
      const alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        buttons: ['OK']
      });
      alert.present();
    }
  }
