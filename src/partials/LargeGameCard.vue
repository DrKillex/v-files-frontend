<template>
    <div class="game d-flex justify-content-start align-items-center mb-2">
        <div class="image flex-shrink-0 w-25">
            <img :src="game.thumb" class="ir-img">
        </div>
        <div class="content px-3 w-50 h-100 py-2">
            <h5 class="mb-2">{{ game.original_title }}</h5>
            <div class="d-flex mb-2 flex-wrap gap-1">
                <span class="ir-badge me-1" v-for="genre in game.genres">{{ genre.name }}</span>
                <span class="ir-badge me-1" v-if="game.singleplayer">singleplayer</span>
                <span class="ir-badge me-1" v-if="game.multiplayer">multiplayer</span>
                <span class="ir-badge me-1" v-if="game.local_multiplayer">local coop</span>
                <span class="ir-badge me-1" v-if="game.cross_play">crossplay</span>
            </div>
            <div class="information d-flex">
                <small class="me-3">{{ date(game.release) }}</small>
                <span class="me-2" v-if="game.windows">W</span>
                <span class="me-2" v-if="game.mac">A</span>
                <span class="me-2" v-if="game.linux">L</span>
            </div>
        </div>
        <div v-if="game.price == 0" class="price mx-auto my-badge">
            free-to-play
        </div>
        <div v-else class="price flex-shrink-0 w-25 d-flex justify-content-center align-items-end">
            <div class="d-flex" v-if="game.discount_value > 0">
                <div class="sconto h-100 d-flex align-items-center">
                    <span class="sconto-span">{{ game.discount_value }}%</span>
                </div>
                <div class="my-bg-price px-1">
                    <div class="prezzo-pieno text-decoration-line-through">
                        {{ game.price }}$
                    </div>
                    <div class="prezzo-scontato">
                        {{ calcPerc(game.price, game.discount_value) }}$
                    </div>
                </div>
            </div>
            <div v-else class="prezzo-scontato">
                {{ game.price }}$
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LargeGameCard',
    props: {
        game: Object
    },
    methods: {
        date(date) {
            const dateIt = new Date(date);
            return dateIt.toLocaleDateString();
        },
        calcPerc(price, discount) {
            return (price - ((price * discount) / 100)).toFixed(2);
        },
    }

}
</script>

<style lang="scss" scoped>
.game {
    background-color: #404853;
    margin-left: -12px;
    width: 100%;
    max-height: 150px;
}

.ir-img {
    width: 100%;
    height: 150px;
    object-fit: contain;
}

.content {
    .ir-badge {
        font-size: 14px;
        padding: 2px 10px;
        background-color: #4D565F;
    }
}

.my-badge {
    background-color: #4C6D16;
    padding: 2px 10px;
    color: #BDEC48;
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

    .my-bg-price {
        background-color: #383f49;
    }
}
</style>