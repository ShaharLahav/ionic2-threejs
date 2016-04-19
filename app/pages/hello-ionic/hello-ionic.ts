import {Modal, NavController, NavParams, Page} from 'ionic-angular';
import {InputModalPage} from '../input-modal/input-modal.ts';

declare var THREE: any;

@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
    scene: any;
    camera: any;
    renderer: any;
    cube: any;
    render: any;
    controls: any;
    action: string;

    constructor(private nav: NavController) {
        this.action = "animate";

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
        this.render = () => {
            requestAnimationFrame(this.render);

            //  this.cube.rotation.x += 0.01;
            // this.cube.rotation.y += 0.02;
            // this.cube.rotation.z += 0.03;
            // console.log(this.cube.MeshBasicMaterial.color);
            // this.cube.MeshBasicMaterial.color += 10;
            this.renderer.render(this.scene, this.camera);
        };

        // this.renderer.setSize(window.innerWidth, window.innerHeight);
        setTimeout(() => {
            document.getElementById('threeContent').appendChild(this.renderer.domElement);
            var geometry = new THREE.BoxGeometry(2, 2, 2);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
            this.cube = new THREE.Mesh(geometry, material);
            this.scene.add(this.cube);
            this.camera.position.z = 5;
            this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
            this.controls.addEventListener('change', this.render);
            this.render();

        }, 1);
        //document.body.appendChild(this.renderer.domElement);

    }

    openModal() {
        let modal = Modal.create(InputModalPage);
        this.nav.present(modal);
    }

    // actionFunc() {
    //     this.action = this.action=="animate"?"control":"animate";
    // }
}
