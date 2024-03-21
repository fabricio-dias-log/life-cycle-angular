import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input() item!: Item;
  @Output() editItem = new EventEmitter();
  @Output() idToDeleteItem = new EventEmitter();
  faPen = faPen;
  faTrash = faTrash

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.listaService.atualizarLocalStorage();
  }

  editarItem(){
    this.editItem.emit(this.item);
  }

  deletarItem(){
    this.idToDeleteItem.emit(this.item.id);
  }

}
