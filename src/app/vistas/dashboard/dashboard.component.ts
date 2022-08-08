import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListadepacientesI } from '../../modelos/listadepacientes.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pacientes:ListadepacientesI;
  id:number;
  url: string;
  name:string;

  constructor(private api:ApiService, private router:Router) { }



  ngOnInit() { 
    for (let i=1; i<=150;i++){
    this.api.getAllPacients(i).subscribe((data:any) =>{
      console.log(data);
      this.url = data.sprites.front_default;
      this.name = data.name;
      this.id=data.id;
    })
  }
}
}
