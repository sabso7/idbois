<meta name="description" content="">
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
                    <h4 class='text-font3'>+33 06 35 22 53 76</h4>
                </v-row>
                <v-row class='mt-5' justify='center'>
                    <h4 class='text-font3'>cbassobondini@yahoo.fr</h4>
                </v-row>
                <v-row class='mt-5' justify='center'>
                    <h4 class='text-font3'>359 Route de la molière 74150 Marcellaz Albanais</h4>
                </v-row>
            </v-col>
        </v-row>
    </v-footer>
</v-app>
</template>

<script>
import navbar from "./components/NavBar.vue";
export default {
    inject: ["mq"],
    name: 'App',
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

.text-font3 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size:0.7em;
    font-display: swap;
}

.text-blanc {
    color: white;
}

#logo-footer {
    max-width: 70px;
    max-height: 70px
}
</style>
