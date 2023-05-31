<script>
import SearchBar from '../partials/SearchBar.vue';
import FlagGame from '../partials/FlagGame.vue';
export default {
    name: 'AppJumbo',
    components: {
        SearchBar,
        FlagGame
    }
}

</script>

<template>
    <SearchBar />
    <FlagGame />
</template>

<style lang="scss" scoped>
@import '../assets/scss/_partial/jumbo';
</style>
