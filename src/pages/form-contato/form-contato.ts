import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-form-contato',
  templateUrl: 'form-contato.html',
})
export class FormContatoPage {

  formGroup: FormGroup;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['Suporte', [Validators.required]],
      mensagem: ['', [Validators.required]]

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormContatoPage');
  }

  enviadoComSussesso() {
    console.log(this.formGroup.value);
    this.showAlert();
    this.navCtrl.setRoot('HomePage')
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Mensagem',
      subTitle: 'Cadastrado com Sucesso',
      buttons: ['FECHAR']
    });
    alert.present();
  }
}

