import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes-nav',
  templateUrl: './redes-nav.component.html',
  styleUrls: ['./redes-nav.component.css']
})

export class RedesNavComponent implements OnInit {
   
  constructor(private router: Router) { }

  ngOnInit(): void {}
  
  login(){
    this.router.navigate(['/login'])
  }

}
