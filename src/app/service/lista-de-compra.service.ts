import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('listaDeCompra') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nome: string){
    const id = this.listaDeCompra.length + 1;

    const item: Item = {
      id: id,
      nome: nome,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item;
  }

  adicionarItemNaLista(nome: string){
    const item = this.criarItem(nome);
    this.listaDeCompra.push(item);
  }

  editarItemNaLista(itemAntigo: Item, nomeEditado: string){
    const itemEditado = {
      ...itemAntigo,
      nome: nomeEditado
    }

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
  }
}
