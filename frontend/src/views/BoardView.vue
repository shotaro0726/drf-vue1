<template>
    <div>
        <board-views></board-views>
    </div>
</template>

<script>
import BoardView from '../components/BoardView';
export default {
    beforeCreate() {
        try {
            this.$store.dispatch("FETCH_BOARD", this.$route.params.id);
            let disqus_config = () => {
                this.page.url = location.origin;
                this.page.idemtifier = location.pathname;
            };
            (() => {
                let d = document,
                s = d.createElement('script');
                s.src = 'https://jmboard.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Data());
                (d.head || d.body).appendChild(s);
            })();
        } catch (e) {
            console.log('Error');
        }
    },
    mounted() {},
    computed: {
        params() {
            return this.$route.params.id;
        }
    },
    watch: {
        params(newVal) {
            this.$store.dispatch("FETCH_BOARD", newVal);
        }
    },
    components: {
        BoardView
    }
}
</script>

<style scoped>

</style>