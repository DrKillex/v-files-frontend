<script>
import SearchBar from '../partials/SearchBar.vue';
import FlagGame from '../partials/FlagGame.vue';
import SpecialOffers from '../partials/SpecialOffers.vue';
export default {
    name: 'AppJumbo',
    components: {
        SearchBar,
        FlagGame,
        SpecialOffers
    }
}

</script>

<template>
    <SearchBar />
    <FlagGame />
    <SpecialOffers />
</template>

<style lang="scss" scoped>
section {
    padding: 0 18.75rem;
    color: white;

    h1 {

        margin: 4.375rem 0 2.5rem .625rem;
    }

    div {
        img {
            width: fit-content;
            height: 23.4375rem;
        }

        .genre {
            border: 1px solid;
        }

    }
}
</style>
