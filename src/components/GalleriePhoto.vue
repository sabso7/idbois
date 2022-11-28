<template>
<v-main style='padding:0 !important'>
    <v-container>
        <masonry-wall  :items="picList" :ssr-columns="1" :column-width=" mq.current == 'xs' ? 150:400" :padding="0">
            <template #default="{ item }">
                <v-img alt='photo de terasse en bois' style="border: solid 5px transparent; border-radius:2%" :src="item"></v-img>
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
        this.picList = [require('../assets/img-site/img1-min.jpg'), require('../assets/img-site/img2-min.jpg'), require('../assets/img-site/img3-min.jpg'), require('../assets/img-site/img4-min.jpg'), require('../assets/img-site/img5-min.jpg'), require('../assets/img-site/img6-min.jpg'),require('../assets/img-site/img7-min.jpg'),require('../assets/img-site/img8-min.jpg')];
    },
    methods: {

    },
};
</script>
