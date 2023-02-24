<script> 
    import Logo from "../components/Logo.vue";
    import coords from "../data/coords.json";
    import gsap from 'gsap'
    import {
        PlaneGeometry,
        BufferAttribute,
        Raycaster,
        Scene,
        PerspectiveCamera,
        Group,
        Clock
    } from "three";
    import { CSS3DObject, CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer"
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

    const cube = new Group();

    export default {
        data() {
            return {
                animation: 0
            }
        },
        methods: {
            increment() {
                this.animation++;
                console.log(this.animation)

                let rotations;
                switch(this.animation) {
                    case 0:
                        rotations = {duration: 1, x: 0, y: 0};
                        break;
                    case 1:
                        rotations = {duration: 1, x: -1.57, y:0};
                        break;
                    case 2:
                        rotations = {duration: 1, y: 1.57, x:0};
                        break;
                    case 3: 
                        rotations = {duration: 2, x: 0, y: -1.57};
                        break;
                    case 4:
                        rotations = {durations: 1, x: 0, y: -3.14}
                        break;
                    default:
                        rotations = {duration: 2, x: 0, y:0}; 
                        break;
                }

                gsap.to(cube.rotation,  rotations)

                if(this.animation == 6) this.reset();
            },
            reset() {
                this.animation = 0;
            }
        },
        components: {
            Logo
        },
        mounted() {

            const clock = new Clock();
            const scene = new Scene();
            // Determines the position from which the user "sees"
            const camera = new PerspectiveCamera(
            75,
            innerWidth / innerHeight,
            0.1,
            1000
            );
            // Converts 3D to 2D via calculations
            const renderer = new CSS3DRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById( 'three-container' ).appendChild( renderer.domElement );

            const container = this.$el.querySelector('#d-container')
            const panel3d = [];


            // const logo = this.$el.querySelector("#first-side");
            // const logo3 = new CSS3DObject(logo);
            // logo3.position.z = -5;  
            // scene.add(logo3);


            [...container.children].map((panel, i) => {
                panel3d[i] = document.createElement('div');
                panel3d[i].className = 'panel';
                panel3d[i].style.backgroundColor = 'rgba(127,0,127,0.8)'; 
                const details = document.createElement( 'div' );
                details.className = 'details';
                details.innerHTML = panel.innerHTML;
                panel3d[i].appendChild(details);
                panel3d[i].addEventListener('pointerdown', this.increment)

                const objectCSS = new CSS3DObject( panel3d[i] );
                let scaler = 100;
                objectCSS.position.set(coords.data[i].tx*scaler, coords.data[i].ty*scaler, coords.data[i].tz*scaler);
                objectCSS.rotateX(coords.data[i].rx)
                objectCSS.rotateY(coords.data[i].ry)
                cube.add( objectCSS );
            })

            scene.add(cube);

            const controls = new OrbitControls( camera, renderer.domElement );
            // controls.movementSpeed = 50;
            // controls.lookSpeed = 0.05;

            camera.position.z = 500;

            function animate() {
				requestAnimationFrame( animate );

				// cube.rotation.x += 0.01;
				// cube.rotation.y += 0.01;

				renderer.render( scene, camera );
                controls.update( clock.getDelta() );
			};

			animate();

            document.querySelector('div.panel').addEventListener('click', ()=> {
                console.log('click');
            })
        }
    }
</script>

<template>
    <Layout>
        <div id="three-container">
        </div>
        <div id="d-container">
            <div id="first-side">
                <Logo id="first-side" fill="#ffffff"/>
            </div>
            <div id="2nd-side"> 
                I’m a freelance <br>creative technologist<br>
                 working with<br> 3D, audio, and XR
            </div>
            <div id="3rd-side">
                Delivering <br>websites,<br> landing pages,<br>video, and<br>sound design
            </div>
            <div id="4th-side">
                Based in <br>London, UK 
            </div>
            <div id="5th-side">
                Book a <br>consultation<br>here
            </div>
            <div id="sixth-side"></div>
        </div>
    </Layout>
</template>

<style>

.panel {
    width: 200px;
    height: 200px;
    box-shadow: 0px 0px 60px rgba(217, 70, 236, 0.5);
    border: 1px solid rgba(35, 9, 40, 0.25);
    text-align: center;
    line-height: normal;
    cursor: default;
}

.panel:hover {
    box-shadow: 0px 0px 12px rgba(255,0,255,0.75);
    border: 1px solid rgba(255,100,255,0.75);
}

.panel .details {
    position: absolute;
    bottom: 50px;
    left: 0px;
    right: 0px;
    font-size: 20px;
    text-align: center;
    color: rgba(255,255,255,0.75);
    font-family: 'Optima';
}

.panel svg {
    width: 180px;
    height: 180px;
    position: absolute;
    left:10px;
    right:10px;
    bottom:-40px;
}

</style>