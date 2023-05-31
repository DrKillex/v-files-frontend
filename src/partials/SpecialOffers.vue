<script>
export default {
    name: 'SpecialOffers',

}

</script>

<template>
    <section>
        <h4>
            OFFERTE SPECIALI
        </h4>
        <div class="d-flex gap-5 justify-content-between">
            <div>
                <img src="https://cdn.wallpapersafari.com/87/92/1Nd4g3.png" alt="">
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
            <div>
                <img src="https://cdn.wallpapersafari.com/87/92/1Nd4g3.png" alt="">
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
            <div>
                <img src="https://cdn.wallpapersafari.com/87/92/1Nd4g3.png" alt="">
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