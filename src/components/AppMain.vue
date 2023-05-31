
<script>
import AppJumbo from './AppJumbo.vue';
import AppGameList from './AppGameList.vue';
export default {
    name: 'Main',
    components: {
        AppJumbo,
        AppGameList
    }

}
</script>

<template>
    <div>

        <AppJumbo />
        <AppGameList />
    </div>
</template>

<style lang="scss" scoped></style>