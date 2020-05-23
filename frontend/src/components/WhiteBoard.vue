<template>
    <div>
        <div class="wrap">
            <b-table :striped="striped" :hover="hover" :items="calItems" :fields="fields">
                <template v-slot:cell(title)="data">
                    <router-link :to="/board/ + data.item.id + '/'">{{ data.value }}</router-link>
                </template>
            </b-table>
            <div>
                <div class="category" v-if="category">
                    <strong>かてごり</strong>
                    <b-list-group>
                        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="cate in category" :key="cate.id">
                            <router-link :to="{name: 'category', params:{name: cate.name,id:1}}">{{ cate.name }}</router-link>
                            <b-badge variant="primary" pill>{{ cate.post_num }}</b-badge>
                        </b-list-group-item>
                    </b-list-group>
                </div>
                <div class="clear"></div>
                <div class="mt-3">
                    <b-pagination-nav pills size="lg" number-of-pages="10" :link-gen="linkGen" align="center" use-router>

                    </b-pagination-nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            fields: ['id','title','author','created'],
            striped: true,
            hover: true,
            dark: true,
        }
    },
    methods: {
        linkGen(pageNum) {
            if(this.$route.name == "board")
            return `/list/${pageNum}`;
            else
            return `/category/${this.$route.params.name}/${pageNum}`;
        },
    },
    computed: {
        ...mapState(['list','category']),
        calItems() {
            let items = [];
            for(let i=0; i<this.list.length; i++) {
                let itemJson={
                    'id': i+1,
                    'title': this.list[i].title,
                    'author':this.list[i].author,
                    'created': this.list[i].created,
                }
                items.push(itemJson);
            }
            return items;
        },
    },
    watch: {
        $route(newVal) {
            if(this.$route.name == "board"){
                this.$store.dispatch("FETCH_LIST", newVal.params.id);
            } else if(this.$route.name == "category") {
                this.$store.dispatch("FETCH_LIST2", newVal.params);
            }
        },
    }
}
</script>

<style scoped>
.wrap {
    float: left;
    width: 80%;
}
b-list-group {
    float: right;
    width: 20%;
    min-height: 540px;
}
.mt-3 {
    text-align: center;
}
.clear {
    clear: both;
}
</style>