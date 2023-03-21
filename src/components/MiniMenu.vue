<script>
    import AudioSVG from './AudioSVG.vue';
    import AudioOffSVG from './AudioOffSVG.vue'
    import MenuSVG from './MenuSVG.vue';

    export default {
        data() {
            return {
                three: true,
                audio: false,
            }
        },
        components: {
            AudioSVG,
            MenuSVG,
            AudioOffSVG,
        },
        methods: {
            toggleAudio: function() {
                //get audio status

                console.log(this.audio);
                if(this.audio) {
                    //turn off audio
                    this.audio = false;
                } else {
                    //turn on audio
                    this.audio = true;
                }
                // vm.$forceUpdate();
            },
            toggleRender: function() {
                //get render status
                console.log(this.three);
                if(this.three) {
                    document.querySelector("#render-toggle").innerHTML = "3D";
                    this.three = false;
                } else {
                    document.querySelector("#render-toggle").innerHTML = "2D";
                    this.three = true;
                }
                //toggle 2d/3d 
            }
        }
    }
</script>

<template>
        <div id="mini-menu">
            <div class="menu-left" @click="toggleAudio">
                <AudioSVG v-show="this.audio" fill="black" />
                <AudioOffSVG v-show="!this.audio" fill="black" />
            </div>
            <div class="menu-left" id="render-toggle" @click="toggleRender">2D</div>
            <div id="flex-spacer"></div>
            <MenuSVG class="menu-svg" fill="black"/>
        </div>
</template>

<style scoped>
.menu-svg {
    height: 30px;
    width: 30px;
    margin-left: 10px;
    margin-right: 10px;
    margin: auto;
    flex-grow: 1;
}

svg {
    width: 30px;
    height: 30px;
}
#mini-menu {
    z-index: 20;
    background-color: white;
    height: 60px;
    width: 100vw;
    top: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    position: absolute;
}
 .menu-left {
    margin-left: 5px;
    margin-right: 5px;
    height: 30px;
    width: 30px;
    flex-grow: 1;
 }

 #render-toggle {
    color: black;
    font-size: 30px;
    height: 35px;
    width: 35px;
    flex-grow: 1;
 }

 #flex-spacer {
    flex-grow: 3;
 }

</style>