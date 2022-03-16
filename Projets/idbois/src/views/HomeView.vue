<template>
<meta name="description" content="page d'accueil de idbois terasse bois">
<v-container id='accueil' fluid class='pa-0 content-home'>
    <v-img id='home-banner' alt='vieux bois de terasse' :src=' mq.current === "xs" ? require("../assets/img-site/woodfond.jpg"): require("../assets/img-site/fond.jpg")'>
        <div id='main-title'>
            <v-row class="ma-4" justify='center'>
                <h1 style='font-size:8em;' class='text-blanc text-font2 text-size3' :class='mq'><span class='text-o'>ID</span>B<span class='text-font'>ois</span></h1>
            </v-row>
            <v-row justify='center'>
                <span class='line mb-10' :class='mq'></span>
            </v-row>
            <v-row class="ma-4" justify='center'>
                <h2 style='font-size:3em;' class='text-blanc text-font text-size2' :class='mq'>Votre <span class='text-o text-font2'> terasse bois </span> sur mesure</h2>
            </v-row>
            <v-row class="ma-4" justify='center'>
                <h2 style='font-size:2em;' class='text-blanc text-font text-size1' :class='mq'>Demandez un <span class='text-o text-font2'> devis gratuit </span></h2>
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
<v-container v-if='mq.current === "xs" || mq.current === "sm"' fluid>
    <v-row justify='center' class='ma-5'>
        <v-card class='circular-img' :class='mq'>
            <v-img alt='lame de bois pour terasse' class='img-rounded' :class='mq' src='@/assets/img-site/deck.jpg'></v-img>
        </v-card>
    </v-row>
    <v-row class='ma-3' justify='center' align='center'>
        <h2 style='font-size:2em;' class='text-font2 text-size1' :class='mq'>Dans la réalisation de <span class='text-o'> terrasses bois </span> depuis plus de 15 ans</h2>
    </v-row>
    <v-row class='ma-3' justify='center' align='center'>
        <h3 class='text-font text-size4' :class='mq'>Je vous propose mon expertise pour tous vos ouvrages bois d'extérieur</h3>
    </v-row>
    <v-row justify='center' align='center' class='ma-5'>
        <v-card class='circular-img' :class='mq'>
            <v-img alt='marteau sur bois de terasse' class='img-rounded' :class='mq' src='@/assets/img-site/hammer.jpg'></v-img>
        </v-card>
    </v-row>
    <v-row class='ma-3' justify='center' align='center'>
        <h2 style='font-size:2em;' class='text-font2 text-size1' :class='mq'> <span class='text-o'>Adaptable </span> selon vos besoins</h2>
    </v-row>
    <v-row class='ma-3' justify='center' align='center'>
        <h3 class='text-font text-size4' :class='mq'>Commande - Livraison - Réalisation</h3>
    </v-row>
    <v-row class='ma-3' justify='center' align='center'>
        <h3 class='text-font text-size4' :class='mq'>Je m'adapte en fonction de vos besoins</h3>
    </v-row>
</v-container>
<v-container v-else class='mb-15 mt-15'>
    <v-row class='ma-12'>
        <v-col cols='6'>
            <v-row class='mt-3'>
                <h2 style='font-size:2em;' class='mt-9 text-font2 text-size1' :class='mq'>Dans la réalisation de <span class='text-o'> terrasses bois </span> depuis plus de 15 ans</h2>
            </v-row>
            <v-row class='mt-9'>
                <h3 class='text-font text-size4' :class='mq'>Je vous propose mon expertise pour tous vos ouvrages bois d'extérieur</h3>
            </v-row>
        </v-col>
        <v-col cols='6'>
            <v-row justify='center'>
                <v-card class='circular-img' :class='mq'>
                    <v-img alt='lame de bois pour terasse' class='img-rounded' :class='mq' src='@/assets/img-site/deck.jpg'></v-img>
                </v-card>
            </v-row>
        </v-col>
    </v-row>
    <v-row class='ma-12'>
        <v-col cols='6'>
            <v-row justify='center'>
                <v-card class='circular-img' :class='mq'>
                    <v-img alt='marteau sur bois de terasse' class='img-rounded' :class='mq' src='@/assets/img-site/hammer.jpg'></v-img>
                </v-card>
            </v-row>
        </v-col>
        <v-col cols='6'>
            <v-row class='mt-3 ml-15'>
                <h2 style='font-size:2em;' class='text-font2 text-size1' :class='mq'> <span class='text-o'>Adaptable </span> selon vos besoins</h2>
            </v-row>
            <v-row class='mt-9 ml-15'>
                <h3 class='text-font text-size4' :class='mq'>Commande - Livraison - Réalisation</h3>
            </v-row>
            <v-row class='mt-9 ml-15'>
                <h3 class='text-font text-size4' :class='mq'>Je m'adapte en fonction de vos besoins</h3>
            </v-row>
        </v-col>
    </v-row>
</v-container>
<v-row justify='center'>
    <span class='line ma-5' :class='mq'></span>
</v-row>
<v-row class='ma-9' justify='center'>
    <h2 style='font-size:2em' class='text-font2 text-size1' :class='mq'>Mes dernières <span class='text-o'>réalisations</span></h2>
</v-row>
<gallerie id='gallerie' style='background-color:#F5962D'></gallerie>
<v-container id='contact' class='mb-10'>
    <v-row justify='center'>
        <span class='line mt-10' :class='mq'></span>
    </v-row>
    <v-row justify='center'>
        <v-card class='circular-img mt-15' :class='mq'>
            <v-img alt='téléphone sur bois de terasse' class='img-rounded' :class='mq' src='@/assets/img-site/phone.jpg'></v-img>
        </v-card>
    </v-row>
    <v-row justify='center'>
        <h2 style='font-size:2em;' class='text-font2 text-size1 mt-15' :class='mq'><span class='text-o'>Contactez-moi</span> pour un devis gratuit</h2>
    </v-row>
    <v-row class='mt-15' justify='center'>
        <h3 class='text-font1 text-size1' :class='mq'>+33 06 35 22 53 76</h3>
    </v-row>
    <v-row class='mt-10 mb-15' justify='center'>
        <h3 class='text-font1 text-size1' :class='mq'>cbassobondini@yahoo.fr</h3>
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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');

.text-font {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
}

.text-o {
    color: #F5962D !important
}

.text-font2 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
}

.text-size4.xs, .text-size4.sm {
    font-size: 0.8em !important;
}

.text-size3.xs, .text-size3.sm {
    font-size: 3em !important;
}

.text-size2.xs, .text-size2.sm {
    font-size: 1.5em !important;
}

.text-size1.xs, .text-size1.sm {
    font-size: 1.2em !important;
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

.circular-img.xs, .circular-img.sm {
    width: 100px;
    height: 100px;
}

.homebtn.xs, .homebtn.sm {
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
