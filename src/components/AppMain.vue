
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
        <h1>Main</h1>
        <AppJumbo />
        <AppGameList />
    </div>
</template>

<style lang="scss" scoped></style>