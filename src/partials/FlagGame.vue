<script>
export default {
    name: 'FlagGame',

}
</script>

<template>
    <section>
        <div class="container py-5">
            <h1>Giochi</h1>
            <div class="d-flex bg-div p-4">
                <div>
                    <img src="https://cdn.wallpapersafari.com/87/92/1Nd4g3.png" alt="">
                </div>
                <div class="mx-3">
                    <h2>Call of Duty: Black Ops III</h2>
                    <h4>
                        Data di rilascio: 6 nov 2015
                    </h4>
                    <ul class="d-flex list-unstyiled flex-wrap gap-2 ps-0">
                        <li class="badge">multigiocatore</li>
                        <li class="badge">multigiocatore</li>
                        <li class="badge">multigiocatore</li>
                        <li class="badge">multigiocatore</li>
                        <li class="badge">multigiocatore</li>
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
    .container{
        background-image: url(https://cdn.wallpapersafari.com/87/92/1Nd4g3.png);
        background-size: cover;
        box-shadow: inset 0px 0px 50px 50px #0f1014;
        .bg-div{
            background: rgba($color: #000000, $alpha: 0.7);
            .badge{
                background: rgba($color: #000000, $alpha: 0.4);
                padding: 7px 10px;
            }
        }
    }
}
</style>