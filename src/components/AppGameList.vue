<script>
import axios from 'axios';
import LargeGameCard from '../partials/LargeGameCard.vue';
export default {
    name: 'AppGameList',
    components: {
        LargeGameCard
    },
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            showButton: true,
            apiUrls: {
                games: '/games'
            },
            games: []
        }
    },
    methods: {
        getGames() {
            axios.get(this.apiBaseUrl + this.apiUrls.games)
                .then((response) => {
                    const results = response.data.results.data ?? response.data.results;
                    this.games = results;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
    },
    created() {
        this.getGames();
    }
}
</script>

<template>
    <section class="p-4">
        <div class="container">
            <h4>I GIOCHI</h4>
            <LargeGameCard v-for="game in games" :game="game" />
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    background-color: #4b5b6a;


    .game {
        background-color: #404853;
        margin-left: -12px;
        width: 100%;
        max-height: 150px;
    }

    .ir-img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .content {
        .ir-badge {
            font-size: 14px;
            padding: 2px 10px;
            background-color: #4D565F;
        }
    }

    .information {
        color: lightgray;
    }

    .price {
        span {
            padding: 5px 10px;
            background-color: #38404B;
            cursor: pointer;
        }

        .sconto-span {
            background-color: #4C6D16;
            cursor: inherit;
            font-size: 28px;
            color: #BDEC48;
        }

        .prezzo-scontato {
            color: #BDEC48;
            font-size: 18px;
        }
    }
}
</style>