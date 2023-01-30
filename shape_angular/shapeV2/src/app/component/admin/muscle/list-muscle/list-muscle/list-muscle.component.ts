import { MuscleService } from './../../../../../services/muscle/muscle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-muscle',
  templateUrl: './list-muscle.component.html',
  styleUrls: ['./list-muscle.component.css']
})
export class ListMuscleComponent implements OnInit {

  declare muscles : any;
  
  constructor(
    private muscleService: MuscleService,
    private router : Router,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.muscleService.findAllMuscles().subscribe(
      data => {
        console.log(data);
        this.muscles = data;

      }
    );
    if (this.route.snapshot.paramMap.get('muscle_id') != null) {

      this.remove();
    }
  }
  remove() {

    const muscle_id = Number(this.route.snapshot.paramMap.get('muscle_id'));
    this.muscleService.deleteMuscle(muscle_id).subscribe(
      () => {
         this.router.navigate(["/muscle"])




      }
    )
  }

}
