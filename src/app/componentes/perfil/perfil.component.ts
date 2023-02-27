import { Component, OnInit, Input } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  item : any;
  perfil : any;

  @Input()
   isLogged : boolean | undefined;

  constructor( private datosPorfolio : PorfolioService, private modalService: NgbModal) {  }

  ngOnInit() {
     this.datosPorfolio.obtenerDatos().subscribe( data => {
     this.perfil = data.perfil;
     });
  }

  mostrarModal( data: any, modalProyecto: any ){
    this.item = data;
    this.modalService.open(modalProyecto);
  }

}
