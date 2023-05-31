<script>
import axios from 'axios'
export default {
    name: 'SpecialOffers',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api/',

            apiUrl: {

                gamesSales: 'gamesSales'

            },
            games: [],
            // imagePath: '',
            // gameDate: game.release
        }
    },
    methods: {
        getGames() {
            axios.get(this.apiBaseUrl + this.apiUrl.gamesSales).then((response) => {
                this.games = response.data.results.data ?? response.data.results
                console.log(response)


            })
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
        <h4>
            OFFERTE SPECIALI
        </h4>
        <div class="d-flex gap-5 justify-content-between">
            <div v-for="game in games">
                <img :src="game.image" alt="">
                <div class="price d-flex">
                    <div class="d-flex">
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
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    margin: 8.75rem 0;
    padding: 0 18.75rem;
    color: white;

    h4 {
        margin-bottom: 2.5rem;
    }

    div {
        div {
            img {
                object-fit: cover;
                width: 20rem;
                height: 21.5625rem;
            }

            .price {
                span {
                    padding: 0 10px;
                    background-color: #38404B;
                    cursor: pointer;
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

                    .prezzo-scontato {
                        color: #BDEC48;

                    }
                }


            }
        }
    }
}
</style>