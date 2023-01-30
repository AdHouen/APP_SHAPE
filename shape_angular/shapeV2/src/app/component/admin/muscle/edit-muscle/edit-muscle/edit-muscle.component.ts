import { Muscle } from './../../../../../models/muscle/muscle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MuscleService } from './../../../../../services/muscle/muscle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-muscle',
  templateUrl: './edit-muscle.component.html',
  styleUrls: ['./edit-muscle.component.css']
})
export class EditMuscleComponent implements OnInit {


  declare editForm : FormGroup;
  declare muscle : Muscle;

  constructor(
    private muscleService : MuscleService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder,

  ){

  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      muscle_id: ['', Validators.required],
      muscle_nom: ['', Validators.required],
	    muscle_image: ['', Validators.required],
	    utilisateur_id: ['', Validators.required],
	    listMensuration: [[]],
	    listExercice: [[]],


    });

    const muscle_id = Number(this.route.snapshot.paramMap.get('muscle_id'));
    //récupere le produit via l'id
    this.muscleService.editMuscle(muscle_id).subscribe(
      data =>{
        console.log(data)
        //complete le form avec le produit récupéré
       this.editForm.setValue(data);
      }
     )
  }
  update(){
    console.log(this.editForm.value);
    if(this.editForm.valid){

      this.muscleService.updateMuscle(this.editForm.value).subscribe(
        () => {
          this.router.navigate(['/muscle'])
        }
      );
    }
  }
  }


