<template>
    <Layout>
        <div id="three-container">
        </div>
        <div id="2d-container">
            <div id="2nd-side"> 
                I’m a freelance <br>creative technologist<br>
                 working with<br> 3D, audio, and XR
            </div>
        </div>
    </Layout>
</template>

<script> 
    import {
        PlaneGeometry,
        BufferAttribute,
        Raycaster,
        Scene,
        PerspectiveCamera,
        WebGLRenderer,
        BoxGeometry,
        MeshBasicMaterial,
        MeshPhongMaterial,
        DoubleSide,
        FlatShading,
        Mesh,
        DirectionalLight,
        BufferGeometry,
    } from "three";
    import { CSS3DObject, CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer"

    export default {
        mounted() {


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

            const element = document.createElement( 'div' );
            element.className = 'panel';
            element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

            const details = document.createElement( 'div' );
            details.className = 'details';
            details.innerHTML = document.getElementById("2nd-side").innerHTML ;
            element.appendChild( details );

            const objectCSS = new CSS3DObject( element );
            objectCSS.position.x = 0;
            objectCSS.position.y = 0;
            objectCSS.position.z = -5;
            scene.add( objectCSS );


            // const geometry = new BoxGeometry( 1, 1, 1 );
            // const material = new MeshBasicMaterial( { color: 0x00ff00 } );
            // const cube = new Mesh( geometry, material );
            // scene.add( cube );

            camera.position.z = 500;

            function animate() {
				requestAnimationFrame( animate );

				// cube.rotation.x += 0.01;
				// cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
        }
    }
</script>

<style>

.panel {
    width: 200px;
    height: 200px;
    box-shadow: 0px 0px 12px rgba(0,255,255,0.5);
    border: 1px solid rgba(127,255,255,0.25);
    font-family: Helvetica, sans-serif;
    text-align: center;
    line-height: normal;
    cursor: default;
}

.panel:hover {
    box-shadow: 0px 0px 12px rgba(0,255,255,0.75);
    border: 1px solid rgba(127,255,255,0.75);
}

.panel .details {
    position: absolute;
    bottom: 15px;
    left: 0px;
    right: 0px;
    font-size: 20px;
    text-align: center;
    color: rgba(127,255,255,0.75);
}

</style>