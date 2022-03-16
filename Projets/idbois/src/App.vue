<meta name="description" content="page d'accueil, information sur les terasse bois, gallerie de photos de terasse bois, contact pour la pose de terasse bois">
<template>
<v-app>
    <navbar></navbar>
    <router-view />
    <v-footer style='background-color:#F5962D' padless>
        <v-row no-gutters>
            <v-col class="primary lighten-2 text-blanc text-center py-4 white--text" cols="6">
                <v-row class='mt-5' justify='center'>
                    <v-img alt='logo idbois' :class='mq' id='logo-footer' src='@/assets/logo/logo2.png'></v-img>
                </v-row>
                <v-row class='mt-5' justify='center'>
                    {{ new Date().getFullYear() }} - ©<strong>IDB</strong>ois
                </v-row>
            </v-col>
            <v-col class="primary lighten-2 text-blanc text-center py-4 white--text mt-3" cols="6">
                <v-row class='mt-5' justify='center'>
                    <h5 class='text-font2'>+33 06 35 22 53 76</h5>
                </v-row>
                <v-row class='mt-5' justify='center'>
                    <h5 class='text-font2'>cbassobondini@yahoo.fr</h5>
                </v-row>
                <v-row class='mt-5' justify='center'>
                    <h5 class='text-font2'>359 Route de la molière 74150 Marcellaz Albanais</h5>
                </v-row>
            </v-col>
        </v-row>
    </v-footer>
</v-app>
</template>

<script>
import navbar from "./components/NavBar.vue";
export default {
    name: 'App',

    data: () => ({
        //
    }),
    components: {
        navbar
    }
}
</script>

<style>
body,
html {
    height: 100%;
}

.text-blanc {
    color: white;
}

#logo-footer {
    max-width: 70px;
    max-height: 70px
}
</style>
