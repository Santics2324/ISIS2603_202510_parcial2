import { Component, OnInit, Output } from '@angular/core';
import { Candidato } from '../Candidatos';
import { Router } from '@angular/router';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {
  candidatos: Array<Candidato> = [];
  selected: Boolean = false
  selectedCandidato!: Candidato; 

  @Output() candidatoSeleccionado = null
  seleccionado = false;

  seleccionarCandidato(candidato: any) {
    this.candidatoSeleccionado = candidato;
    console.log(this.candidatoSeleccionado);
    this.seleccionado = true;
  }

  constructor(private candidatoService: CandidatoService, private router: Router) {}
  getCandidatosList(): Array<Candidato> {
    return Candidato;
  }
  ngOnInit(): void {
    this.candidatos = this.getCandidatosList();
    this.candidatoService.getAllCandidatos().subscribe(
      (data) => this.candidatos = data);
      
  }

  onSelected(Candidato: Candidato) {
    this.selected = true;
    this.selectedCandidato = Candidato;
    this.router.navigate(['/candidatos', Candidato.id]);
}
}



