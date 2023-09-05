import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent
  ],
  imports: [
    BrowserModule,
    /* Le `FormsModule` est un module Angular qui prend en charge les formulaires basés sur des
    modèles. Il comprend des directives telles que « ngModel » et « ngForm » qui vous permettent de
    lier facilement les contrôles de formulaire aux propriétés de votre composant et de gérer la
    soumission de formulaire. Il fournit également des fonctionnalités intégrées de validation et de
    gestion des erreurs. */
    FormsModule,
    /* Le `ReactiveFormsModule` est un module dans Angular qui prend en charge les formulaires
    réactifs. Les formulaires réactifs sont un moyen de créer des formulaires dans Angular en
    utilisant un style de programmation réactif. Avec les formulaires réactifs, vous définissez la
    structure et la validation du formulaire dans votre classe de composants à l'aide de TypeScript,
    puis vous liez les contrôles de formulaire aux éléments de votre modèle. Le module
    `ReactiveFormsModule` fournit les directives et services nécessaires pour activer cette
    fonctionnalité. Il comprend des directives telles que « formControl », « formGroup » et «
    formArray » qui vous permettent de créer et de gérer des contrôles de formulaire par programme.
    Il fournit également des fonctionnalités intégrées de validation et de gestion des erreurs. */
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
