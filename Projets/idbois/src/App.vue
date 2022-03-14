<template>
<v-app>
    <navbar></navbar>
    <router-view />
    <v-footer style='background-color:orange' padless>
        <v-row no-gutters>
            <v-col class="primary lighten-2 text-blanc text-center py-4 white--text" cols="6">
                <v-row class='mt-5' justify='center'>
                    <v-img :class='mq' id='logo-footer' src='@/assets/logo/logo2.png'></v-img>
                </v-row>
                <v-row class='mt-5' justify='center'>
                    {{ new Date().getFullYear() }} — <strong>Sabso</strong>
                </v-row>
            </v-col>
            <v-col class="primary lighten-2 text-blanc text-center py-4 white--text" cols="6">
                ©<strong>IDB</strong>ois
                <v-row class='mt-5' justify='center'>
                    <h5 class='text-font'>+33 06 35 22 53 76</h5>
                </v-row>
                <v-row class='mt-5' justify='center'>
                    <h5 class='text-font'>cbassobondini@yahoo.fr</h5>
                </v-row>
                <v-row class='mt-5' justify='center'>
                    <h5 class='text-font'>359 Route de la molière 74150 Marcellaz Albanais</h5>
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

.text-orange {
    color: #F27101;
}

.text-blanc {
    color: white;
}

#logo-footer {
    max-width: 70px;
    max-height: 70px
}
</style>
