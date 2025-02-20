import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { logoJavascript, logoReact, logoAngular, logoVue, logoNodejs } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonList, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonList, IonItem, IonLabel, IonIcon]
})
export class InicioPage implements OnInit {
  @ViewChild('nombreInput', { static: true }) nombreInput!: IonInput;
  nombreMostrado: string = '';

  constructor() {
    addIcons({ logoJavascript, logoReact, logoAngular, logoVue, logoNodejs });
  }

  ngOnInit() {
  }

  mostrarNombre() {
    const nombre = this.nombreInput.value;
    this.nombreMostrado = nombre ? nombre.toString() : '';
  }
}
