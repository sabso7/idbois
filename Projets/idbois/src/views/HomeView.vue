<template>
<v-container id='accueil' fluid class='pa-0 content-home'>
    <v-img id='home-banner' :src=' mq.current === "xs" ? require("../assets/img-site/woodfond.jpg"): require("../assets/img-site/fond.jpg")'>
        <div id='main-title'>
            <v-row class="ma-4" justify='center'>
                <h1 style='font-size:8em;' class='text-blanc text-font text-size3' :class='mq'><span class='text-orange'>ID</span>Bois</h1>
            </v-row>
            <v-row justify='center'>
            <span class='line mb-10' :class='mq'></span>
            </v-row>
            <v-row class="ma-4" justify='center'>
                <h2 style='font-size:3em;' class='text-blanc text-font text-size2' :class='mq'>Votre <span class='text-orange'> terasse bois </span> sur mesure</h2>
            </v-row>
            <v-row class="ma-4" justify='center'>
                <h2 style='font-size:2em;' class='text-blanc text-font text-size1' :class='mq'>Demandez un <span class='text-orange'> devis gratuit </span></h2>
            </v-row>
            <v-row justify='center' class='mt-9'>
                <v-btn class=" homebtn" :class='mq' plain @click="scroll('contact')">
                    <v-icon left icon="mdi-handshake-outline"></v-icon>
                    <span>Contact</span>
                </v-btn>
            </v-row>
        </div>
    </v-img>
</v-container>
<v-container v-if='mq.current === "xs"' fluid>
    <v-row justify='center' class='ma-5'>
        <v-card class='circular-img' :class='mq'>
            <v-img class='img-rounded' :class='mq' src='@/assets/img-site/deck.jpg'></v-img>
        </v-card>
    </v-row>
    <v-row class='ma-5' justify='center' align='center'>
        <h2 style='font-size:2em;' class='text-font text-size1' :class='mq'>Dans la réalisation de <span class='text-orange'> terrasses bois </span> depuis plus de 15 ans</h2>
    </v-row>
    <v-row class='ma-5' justify='center' align='center'>
        <h3 class='text-font text-size4' :class='mq'>Je vous propose mon expertise pour tous vos ouvrages bois d'extérieur.</h3>
    </v-row>
    <v-row justify='center' class='ma-5'>
        <v-card class='circular-img' :class='mq'>
            <v-img class='img-rounded' :class='mq' src='@/assets/img-site/hammer.jpg'></v-img>
        </v-card>
    </v-row>
    <v-row class='ma-5'>
        <h2 style='font-size:2em;' class='text-font text-size1' :class='mq'> <span class='text-orange'>Adaptable </span> selon vos besoins</h2>
    </v-row>
    <v-row class='ma-5'>
        <h3 class='text-font text-size4' :class='mq'>Commande - livraison - réalisation</h3>
    </v-row>
    <v-row class='ma-5'>
        <h3 class='text-font text-size4' :class='mq'>Je m'adapte en fonction de vos besoins</h3>
    </v-row>
</v-container>
<v-container v-else>
    <v-row class='ma-15'>
        <v-col cols='6'>
            <v-row class='mt-3'>
                <h2 style='font-size:2em;' class='mt-9 text-font text-size1' :class='mq'>Dans la réalisation de <span class='text-orange'> terrasses bois </span> depuis plus de 15 ans</h2>
            </v-row>
            <v-row class='mt-9'>
                <h3 class='text-font text-size4' :class='mq'>Je vous propose mon expertise pour tous vos ouvrages bois d'extérieur.</h3>
            </v-row>
        </v-col>
        <v-col cols='6'>
            <v-row justify='center'>
                <v-card class='circular-img' :class='mq'>
                    <v-img class='img-rounded' :class='mq' src='@/assets/img-site/deck.jpg'></v-img>
                </v-card>
            </v-row>
        </v-col>
    </v-row>
    <v-row class='ma-15'>
        <v-col cols='6'>
            <v-row justify='center'>
                <v-card class='circular-img' :class='mq'>
                    <v-img class='img-rounded' :class='mq' src='@/assets/img-site/hammer.jpg'></v-img>
                </v-card>
            </v-row>
        </v-col>
        <v-col cols='6'>
            <v-row class='mt-3'>
                <h2 style='font-size:2em;' class='text-font text-size1' :class='mq'> <span class='text-orange'>Adaptable </span> selon vos besoins</h2>
            </v-row>
            <v-row class='mt-9'>
                <h3 class='text-font text-size4' :class='mq'>Commande - livraison - réalisation</h3>
            </v-row>
            <v-row class='mt-9'>
                <h3 class='text-font text-size4' :class='mq'>Je m'adapte en fonction de vos besoins</h3>
            </v-row>
        </v-col>
    </v-row>
</v-container>
<gallerie id='gallerie' style='background-color:orange'></gallerie>
<v-container id='contact'>
    <v-row :class='mq.current = "xs" ? "ma-8":"ma-15"'>
        <v-col :cols='mq.current == "xs" ? "8":"6"'>
            <v-row>
                <h2 style='font-size:2em;' class='text-font text-size1' :class='mq'><span class='text-orange'>Contactez-moi</span> pour un devis gratuit</h2>
            </v-row>
            <v-row class='mt-15'>
                <h3 class='text-font text-size4' :class='mq'>+33 06 35 22 53 76</h3>
            </v-row>
            <v-row class='mt-15'>
                <h3 class='text-font text-size4' :class='mq'>cbassobondini@yahoo.fr</h3>
            </v-row>
        </v-col>
        <v-col :cols='mq.current == "xs" ? "4":"6"'>
            <v-row justify='center'>
                <v-card class='circular-img mt-15' :class='mq'>
                    <v-img class='img-rounded' :class='mq' src='@/assets/img-site/phone.jpg'></v-img>
                </v-card>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import gallerie from '../components/GalleriePhoto.vue';
export default {
    inject: ["mq"],
    components: {
        gallerie
    },
    methods: {
        scroll: function (id) {
            setTimeout(document.getElementById(id).scrollIntoView({
                behavior: "smooth",
            }), 1000);
        },
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.text-font {
    font-family: 'Lato', sans-serif;
}

.text-size4.xs {
    font-size: 0.8em !important;
}

.text-size3.xs {
    font-size: 3em !important;
}

.text-size2.xs {
    font-size: 1.5em !important;
}

.text-size1.xs {
    font-size: 1.3em !important;
}

#home-banner {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: 0;
}

.content-home {
    top: 0% !important;
}

#main-title {
    position: relative;
    top: 20%;
}

.circular-img {
    display: inline-block;
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
}

.img-rounded {
    width: auto;
    height: 100%;
    transform: scale(1.6, 1.6);
}

.circular-img.xs {
    width: 100px;
    height: 100px;
}

.homebtn.xs{
    font-size: 0.6em;
    max-width: 500px;
    max-height: 30px;
}

.line {
    border-top: 4px solid;
    color: orange;
    width: 240px;
}

.line.xs {
    border-top: 2px solid;
    width: 80px;
}
</style>
