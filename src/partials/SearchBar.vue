<script>

export default {
    name: 'SearchBar'
}
</script>

<template>
    <section>
        <div class="container">
            <nav>
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
                            <button type="submit"><font-awesome-icon :icon="['fass', 'magnifying-glass']" /></button>
                        </form>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>
<style lang="scss" scoped>
nav {
    background-color: #355F8D;
    background: linear-gradient(to right, #355F8D 0%, #1a3578 100%);
    align-items: center;
    font-size: .8125rem;
    padding: 6px 0;
    margin-bottom: 60px;

    ul {
        margin-bottom: 0;

        li {
            margin-left: 10px;

            form {
                input {
                    background-color: #336280;
                    border: none;
                    color: #579fcf;
                }

                button {
                    border: none;
                    background-color: #579fcf;
                    padding: 0 3px;
                    margin-right: 3px;
                }
            }
        }
    }
}
</style>