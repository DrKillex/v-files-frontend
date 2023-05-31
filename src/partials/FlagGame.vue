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
                <div class="image-container">
                    <img src="https://cdn.wallpapersafari.com/87/92/1Nd4g3.png" alt="">
                    <div>

                    </div>
                    <div class="price d-flex">
                        <div class="d-flex">
                            <div class="sconto h-100 d-flex align-items-center">
                                <span class="sconto-span">50%</span>
                            </div>
                            <div class="container-prezzo">
                                <div class="prezzo-pieno text-decoration-line-through">
                                    29.99
                                </div>
                                <div class="prezzo-scontato">
                                    10.99
                                </div>
                            </div>
                        </div>
                    </div>
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

    .container {
        background-image: url(https://cdn.wallpapersafari.com/87/92/1Nd4g3.png);
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