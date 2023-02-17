<template>
    <Layout>
        <div id="three-container">
            <!-- The ref attribute allows us to reference this element: this.$refs.canvas -->
            <canvas ref="canvas"></canvas>
        </div>
        <div id="2d-container">

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
            const renderer = new WebGLRenderer({
            canvas: this.$refs.canvas
            });
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            const geometry = new BoxGeometry( 1, 1, 1 );
            const material = new MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new Mesh( geometry, material );
            scene.add( cube );

            camera.position.z = 5;

            function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
        }
    }
</script>

<style scoped>

</style>