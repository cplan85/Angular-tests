import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medic-router',
  templateUrl: './medic-router.component.html',
  styles: [
  ]
})
export class MedicRouterComponent implements OnInit {

  id: string = '';

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

  this.activatedRoute.params.subscribe(params => {
    this.id = params['id']; // new
  });
  }

  saveMedic() {
    this.router.navigate(['medic', '123'])
  }

}
