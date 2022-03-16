<template>
<v-main style='padding:0 !important'>
    <v-container>
        <masonry-wall  :items="picList" :ssr-columns="1" :column-width=" mq.current == 'xs' ? 150:400" :padding="0">
            <template #default="{ item }">
                <v-img alt='photo de terasse en bois' style="border: solid 5px transparent; border-radius:3%" :src="item"></v-img>
            </template>
        </masonry-wall>
    </v-container>
</v-main>
</template>

<script>
export default {
    inject: ["mq"],
    data() {
        return {
            picList: null,
        }
    },
    created() {
        this.picList = [require('../assets/img-site/img1.jpg'), require('../assets/img-site/img2.jpg'), require('../assets/img-site/img3.jpg'), require('../assets/img-site/img4.jpg'), require('../assets/img-site/img5.jpg'), require('../assets/img-site/img6.jpg'),require('../assets/img-site/img7.jpg'),require('../assets/img-site/img8.jpg')];
    },
    methods: {

    },
};
</script>
