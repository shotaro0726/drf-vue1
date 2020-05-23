<template>
    <div v-if="post">
        <b-card nobody style="width:100%">
            <template v-slot:header>
                タイトル: {{ post.title }}
            </template>

            <b-card-body>
                <b-card-title>タイトル</b-card-title>
                <div class="viewer__cont" v-html="previewText"></div>
            </b-card-body>

            <b-list-group flush>
                <b-list-group-item>created: {{ post.created }}</b-list-group-item>
                <b-list-group-item>author: {{ post.author }}</b-list-group-item>
                <b-list-group-item>Category: {{ post.category ? post.category:'null' }}</b-list-group-item>
            </b-list-group>
        </b-card>
        <div id="disqus_thread"></div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
const marked = require('marked');
export default {

    computed: {
        previewText() {
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                headerIds: false,
                tables: true,
                breaks: true,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: false
            });
            return this.post !== undefined ? marked(this.post.content) :marked('NOT CONTENED');
        },

        ...mapState(['board']),
        post() {
            return this.board.post;
        },
        commnets() {
            return this.board.commnets;
        },
        identifier() {
            return this.board.post.title
        }
    },
}
</script>

<style scoped>

</style>