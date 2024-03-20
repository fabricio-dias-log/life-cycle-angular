import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaDeCompras!: Array<Item>;
  itemToEdit!: Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra();
  }

  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage();
  }

  editarItem(item: Item){
    this.itemToEdit = item;
  }
}
