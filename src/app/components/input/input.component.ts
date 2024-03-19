import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemToEdit!: Item;
  valorItem! : string;
  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemToEdit'].firstChange){
      this.valorItem = changes['itemToEdit'].currentValue.nome;
    }

  }

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparInput();
  }

  limparInput() {
    this.valorItem = '';
  }
}
