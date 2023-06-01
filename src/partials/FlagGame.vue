<script>
import axios from 'axios';
export default {
    name: 'FlagGame',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api/',

            apiUrl: {
                flaggedGame: 'gamesFlagged',
                gamesSales: 'gamesSales'

            },
            game: [],
            // imagePath: '',
            // gameDate: game.release
        }
    },
    methods: {
        getGames() {
            axios.get(this.apiBaseUrl + this.apiUrl.flaggedGame).then((response) => {
                this.game = response.data.results
                // console.log(response)
                // this.imagePath = response.data.results.thumb

            })
        },

        date(date) {
            const dateIt = new Date(date);
            return dateIt.toLocaleDateString();
        },
        calcPerc(price, discount) {
            return (price - ((price * discount) / 100)).toFixed(2);
        },


    },
    created() {
        this.getGames();


    }

}
</script>

<template>
    <section>
        <div class="container py-5" :style="{backgroundImage: 'url(' + game.image + ')'}">
            <h1>Giochi</h1>
            <div class="d-flex bg-div p-4">
                <div class="image-container">
                    <img :src="game.image" alt="">
                    <div>
                        <!-- <font-awesome-icon :icon="['fas', 'book-journal-whills']" /> -->
                    </div>
                    <div class="price d-flex" v-if="game.price > 0">
                        <div class="d-flex" v-if="game.discount_value">
                            <div class="sconto h-100 d-flex align-items-center">
                                <span class="sconto-span">{{ game.discount_value }}%</span>
                            </div>
                            <div class="container-prezzo">
                                <div class="prezzo-pieno text-decoration-line-through">
                                    {{ game.price }}$
                                </div>
                                <div class="prezzo-scontato">
                                    {{ calcPerc(game.price, game.discount_value) }}$
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="prezzo-scontato">
                                {{ game.price }}$
                            </div>
                        </div>
                    </div>
                    <div v-else class="prezzo-scontato">
                        free-to-play
                    </div>
                </div>
                <div class="mx-3">
                    <h2>{{ game.original_title }}</h2>
                    <h4>
                        Data di rilascio: {{ date(game.release) }}
                    </h4>
                    <ul class="d-flex list-unstyiled flex-wrap gap-2 ps-0">
                        <li class="badge" v-for="genre in game.genres">{{ genre.name }}</li>
                        <li class="badge" v-if="game.cross_play">crossplay</li>
                        <li class="badge" v-if="game.multiplayer">multiplayer</li>
                        <li class="badge" v-if="game.singleplayer">singleplayer</li>
                        <li class="badge" v-if="game.local_multiplayer">local coop</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    padding: 0 18.75rem;
    color: white;

    .container {
        // background-image: url($this.imagePath);
        background-size: cover;
        box-shadow: inset 0px 0px 50px 50px #0f1014;

        .image-container {

            position: relative;

            .price {
                span {
                    padding: 0 10px;
                    background-color: #38404B;
                    cursor: pointer;
                    position: absolute;
                    bottom: 1px;
                    left: 134px;
                }

                .sconto-span {
                    background-color: #4C6D16;
                    cursor: inherit;
                    font-size: 28px;
                    color: #BDEC48;
                }

                .container-prezzo {
                    background-color: #34474d;
                    font-size: 14px;
                    padding: 0 .3125rem;
                    position: absolute;
                    left: 207px;
                    bottom: 1px;

                    .prezzo-scontato {
                        color: #BDEC48;

                    }
                }


            }
        }


        .bg-div {
            background: rgba($color: #000000, $alpha: 0.7);

            .badge {
                background: rgba($color: #000000, $alpha: 0.4);
                padding: 7px 10px;
            }
        }
    }
}
</style>