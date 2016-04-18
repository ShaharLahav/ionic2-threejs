import {Page, NavController} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic'

/*
  Generated class for the YarivPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/yariv/yariv.html',
})
export class YarivPage {
  constructor(private nav: NavController) {
  }
  asdas() {
    this.nav.push(HelloIonicPage);
  }
}
