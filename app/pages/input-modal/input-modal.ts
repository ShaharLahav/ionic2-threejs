import {Page, NavController, NavParams, ViewController} from 'ionic-angular';

/*
  Generated class for the InputModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/input-modal/input-modal.html',
})
export class InputModalPage {
    constructor(public nav: NavController, private navParams: NavParams, private viewController: ViewController) {
        this.nav = nav;
    }

    dismiss() {
        this.viewController.dismiss()
    }

}
