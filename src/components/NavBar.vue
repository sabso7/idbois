<template>
<v-app-bar id="navbar-idb" ref="navbarIdb" :class="[{change_color: scrollPosition > 5}]" density='compact' elevation="0" fixed>
    <v-spacer></v-spacer>
    <v-btn color="transparent" class='ma-1 navbtn text-font2' :class='[{change_color_btn: scrollPosition > 5}, mq]' text @click="scroll('accueil')">Accueil</v-btn>

    <v-btn color="transparent" class='ma-1 navbtn text-font2' :class='[{change_color_btn: scrollPosition > 5}, mq]' text @click="scroll('gallerie')">Gallerie</v-btn>

    <v-btn color="transparent" class='ma-1 navbtn text-font2' :class='[{change_color_btn: scrollPosition > 5}, mq]' text @click="scroll('contact')"> Contact </v-btn>
    <v-spacer></v-spacer>
</v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
    inject: ["mq"],
    data: () => ({
        scrollPosition: window.scrollY
    }),
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY
        },
        scroll: function (id) {
            setTimeout(document.getElementById(id).scrollIntoView({
                behavior: "smooth",
            }), 1000);
        },
    },
}
</script>

<style scoped>
#navbar-idb {
    background-color: transparent;
}

.navbtn{
    color:white !important;
}

.change_color_btn{
    color: black !important;
}

.navbtn.xs {
    font-size: 0.7em;
    max-width: 8px;
    max-height: 10px;
    background-color: transparent;
}

.change_color {
    transition-property: background-color;
    transition-duration: 1.3s;
    transition-delay: 0.3s;
    background-color: white !important;
}
</style>
