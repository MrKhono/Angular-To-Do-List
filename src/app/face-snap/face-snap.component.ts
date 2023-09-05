import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  /* Le décorateur `@Input()` est utilisé pour définir une propriété d'entrée dans un composant
  angulaire. Il permet au composant de recevoir des données de son composant parent. Dans ce cas, la
  propriété `faceSnap` est marquée comme propriété d'entrée, ce qui signifie que le composant parent
  peut lui lier une valeur lors de l'utilisation du composant `app-face-snap`. */
  @Input() faceSnap!: FaceSnap;

  btnString! : String;

  ngOnInit() {
    this.btnString = 'Oh Snap !!';
  }
  
  onAddSnap(){

    if (this.btnString === 'Oh Snap !!') {
      this.faceSnap.snaps++;
      this.btnString = 'Unsnap';
    }else {
      this.faceSnap.snaps--;
      this.btnString = 'Oh Snap !!';
    }
  
  }
}
