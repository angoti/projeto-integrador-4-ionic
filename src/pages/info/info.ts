import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

	categoria: {};	

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.categoria = navParams.get('categoria');
	}

}
