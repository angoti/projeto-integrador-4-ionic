import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';

import { WebService } from './../../services/rest/service';

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class ListPage {

	categorias: Array<any>;

	constructor(public navCtrl: NavController, private restService: WebService) {

	}

	consulta() {
		this.restService.consultaServidor().subscribe(
			data => {
				this.categorias = data;
				console.log("retorno: ", data);
			},
			err => {
				console.log("Erro: ", err);
			},
			() => console.log('consulta completa')
		);
	}

	exibeProdutosDeUmaCategoria(event, categoria) {
		console.log(categoria);
		this.navCtrl.push(InfoPage, {
			categoria: categoria
		});
	}

}