<script>

export default {
    name: 'SearchBar'
}
</script>

<template>
    <section>
        <div class="container">
            <nav>
                <div class="container ">
                    <ul class="d-flex list-unstyled d-flex justify-content-between align-items-center">
                        <li class="nav-item mx-4">
                            <a class="nav-link " aria-current="page" href="#">Il Tuo Negozio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-4" href="#">Novità e tendenze</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-4" href="#">Categorie</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-4">Negozio dei punti</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-4">Notizie</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-4">Laboratori</a>
                        </li>
                        <li class="nav-item">
                            <form>
                                <input type="search" placeholder="Search" aria-label="Search">
                                <button type="submit">So</button>
                            </form>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '../assets/scss/_partial/searchbar';
</style>