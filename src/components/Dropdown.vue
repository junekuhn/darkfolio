<script>
import themeData from "@/data/theme.json";

export default {
    data() {
    return {
      show: false,
      themeData,
    };
  },
  methods: {
    toggleFade: function() {
        this.show = !this.show;
    }
  }
}
</script>

<template>
    <transition name="fade">
        <div id="dropdown" v-if="show">
            <ul>
                <li class="dropdown-item">
                    <g-link to="/">PORTFOLIO</g-link>
                </li>
                <li class="dropdown-item">
                    <g-link to="/about">ABOUT</g-link>
                </li>
                <li class="dropdown-item">
                    <a :href="`mailto:${themeData.email}`">EMAIL</a>
                </li>
                <li class="dropdown-item">
                    <a class="link" :href="themeData.CV">CV</a>
                </li>
            </ul>
        </div>
    </transition>
</template>


<style scoped>
#dropdown {
    width: 250px;
    height: auto;
    background-color: brown;
    position: absolute;
    z-index: 30;
    top: 60px;
    right: 0px;
    padding: 20px 30px 20px 0px;
}

.dropdown-item {
    font-size: 25px;
    color: white;
    text-align: right;
    list-style-type: none;
    line-height: 40px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>