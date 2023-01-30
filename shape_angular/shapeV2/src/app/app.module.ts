import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAbonnementComponent } from './component/admin/abonnement/add-abonnement/add-abonnement/add-abonnement.component';
import { EditAbonnementComponent } from './component/admin/abonnement/edit-abonnement/edit-abonnement/edit-abonnement.component';
import { ListAbonnementComponent } from './component/admin/abonnement/list-abonnement/list-abonnement/list-abonnement.component';
import { AddMuscleComponent } from './component/admin/muscle/add-muscle/add-muscle/add-muscle.component';
import { EditMuscleComponent } from './component/admin/muscle/edit-muscle/edit-muscle/edit-muscle.component';
import { ListMuscleComponent } from './component/admin/muscle/list-muscle/list-muscle/list-muscle.component';
import { MuscleComponent } from './component/admin/muscle/muscle/muscle/muscle.component';
import { AddMensurationComponent } from './component/admin/mensuration/add-mensuration/add-mensuration/add-mensuration.component';
import { EditMensurationComponent } from './component/admin/mensuration/edit-mensuration/edit-mensuration/edit-mensuration.component';
import { ListMensurationComponent } from './component/admin/mensuration/list-mensuration/list-mensuration/list-mensuration.component';
import { ListUtilisateurComponent } from './component/admin/utilisateur/list-utilisateur/list-utilisateur/list-utilisateur.component';
import { EditUtilisateurComponent } from './component/admin/utilisateur/edit-utilisateur/edit-utilisateur/edit-utilisateur.component';
import { AddUtilisateurComponent } from './component/admin/utilisateur/add-utilisateur/add-utilisateur/add-utilisateur.component';
import { UtilisateurComponent } from './component/admin/utilisateur/utilisateur/utilisateur/utilisateur.component';
import { MensurationComponent } from './component/admin/mensuration/mensuration/mensuration/mensuration.component';
import { GallerieComponent } from './component/admin/gallerie/gallerie/gallerie/gallerie.component';
import { AddGallerieComponent } from './component/admin/gallerie/add-gallerie/add-gallerie/add-gallerie.component';
import { EditGallerieComponent } from './component/admin/gallerie/edit-gallerie/edit-gallerie/edit-gallerie.component';
import { ListGallerieComponent } from './component/admin/gallerie/list-gallerie/list-gallerie/list-gallerie.component';
import { ExerciceComponent } from './component/admin/exercice/exercice/exercice/exercice.component';
import { AddExerciceComponent } from './component/admin/exercice/add-exercice/add-exercice/add-exercice.component';
import { ListExerciceComponent } from './component/admin/exercice/list-exercice/list-exercice/list-exercice.component';
import { EditExerciceComponent } from './component/admin/exercice/edit-exercice/edit-exercice/edit-exercice.component';
import { EntrainementComponent } from './component/admin/entrainement/entrainement/entrainement/entrainement.component';
import { AddEntrainementComponent } from './component/admin/entrainement/add-entrainement/add-entrainement/add-entrainement.component';
import { ListEntrainementComponent } from './component/admin/entrainement/list-entrainement/list-entrainement/list-entrainement.component';
import { EditEntrainementComponent } from './component/admin/entrainement/edit-entrainement/edit-entrainement/edit-entrainement.component';
import { AbonnementComponent } from './component/admin/abonnement/abonnement/abonnement/abonnement.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAbonnementComponent,
    EditAbonnementComponent,
    ListAbonnementComponent,
    AddMuscleComponent,
    EditMuscleComponent,
    ListMuscleComponent,
    MuscleComponent,
    AddMensurationComponent,
    EditMensurationComponent,
    ListMensurationComponent,
    ListUtilisateurComponent,
    EditUtilisateurComponent,
    AddUtilisateurComponent,
    UtilisateurComponent,
    MensurationComponent,
    GallerieComponent,
    AddGallerieComponent,
    EditGallerieComponent,
    ListGallerieComponent,
    ExerciceComponent,
    AddExerciceComponent,
    ListExerciceComponent,
    EditExerciceComponent,
    EntrainementComponent,
    AddEntrainementComponent,
    ListEntrainementComponent,
    EditEntrainementComponent,
    AbonnementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
