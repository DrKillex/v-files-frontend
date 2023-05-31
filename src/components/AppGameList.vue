<script>

export default {
    name: 'AppGameList'
}

</script>

<template>
    <section class="p-4">
        <div class="container">
            <h4>I GIOCHI</h4>
            <div class="d-flex flex-wrap">
                <div class="game d-flex justify-content-start align-items-center mb-2">
                    <div class="image flex-shrink-0 w-25">
                        <img src="https://image.api.playstation.com/vulcan/img/rnd/202008/1900/lTSvbByTYMqy6R22teoybKCg.png" class="ir-img">
                    </div>
                    <div class="content px-3 w-50 h-100 py-2">
                        <h5 class="mb-2">Titolo</h5>
                        <div class="d-flex mb-2">
                            <span class="ir-badge me-1">Lightaaaaaaaaa</span>
                            <span class="ir-badge me-1">Light</span>
                            <span class="ir-badge me-1">Light</span>
                            <span class="ir-badge me-1">Light</span>
                        </div>
                        <div class="information d-flex">
                            <small class="me-1">21 AGO 2023</small>
                            <div class="d-flex"></div>
                        </div>
                    </div>
                    <div class="price flex-shrink-0 w-25 d-flex justify-content-center align-items-end">
                        <span>Free-to-paly</span>
                    </div>
                </div>
                
                <div class="game d-flex justify-content-start align-items-center mb-2">
                    <div class="image flex-shrink-0 w-25">
                        <img src="https://image.api.playstation.com/vulcan/img/rnd/202008/1900/lTSvbByTYMqy6R22teoybKCg.png" class="ir-img">
                    </div>
                    <div class="content px-3 w-50 h-100 py-2">
                        <h5 class="mb-2">Titolo</h5>
                        <div class="d-flex mb-2">
                            <span class="ir-badge me-1">Lightaaaaaaaaa</span>
                            <span class="ir-badge me-1">Light</span>
                            <span class="ir-badge me-1">Light</span>
                            <span class="ir-badge me-1">Light</span>
                        </div>
                        <div class="information d-flex">
                            <small class="me-1">21 AGO 2023</small>
                            <div class="d-flex"></div>
                        </div>
                    </div>
                    <div class="price flex-shrink-0 w-25 d-flex justify-content-center align-items-end">
                        <div class="d-flex">
                            <div class="sconto h-100 d-flex align-items-center me-1">
                                <span class="sconto-span">50%</span>
                            </div>
                            <div>
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

                <div class="game d-flex justify-content-start align-items-center mb-2">
                    <div class="image flex-shrink-0 w-25">
                        <img src="https://image.api.playstation.com/vulcan/img/rnd/202008/1900/lTSvbByTYMqy6R22teoybKCg.png" class="ir-img">
                    </div>
                    <div class="content px-3 w-50 h-100 py-2">
                        <h5 class="mb-2">Titolo</h5>
                        <div class="d-flex mb-2">
                            <span class="ir-badge me-1">Lightaaaaaaaaa</span>
                            <span class="ir-badge me-1">Light</span>
                            <span class="ir-badge me-1">Light</span>
                            <span class="ir-badge me-1">Light</span>
                        </div>
                        <div class="information d-flex">
                            <small class="me-1">21 AGO 2023</small>
                            <div class="d-flex"></div>
                        </div>
                    </div>
                    <div class="price flex-shrink-0 w-25 d-flex justify-content-center align-items-end">
                        <div class="d-flex">
                            <div class="sconto h-100 d-flex align-items-center me-1">
                                <span class="sconto-span">50%</span>
                            </div>
                            <div>
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

                <div class="game d-flex justify-content-start align-items-center mb-2">
                    <div class="image flex-shrink-0 w-25">
                        <img src="https://image.api.playstation.com/vulcan/img/rnd/202008/1900/lTSvbByTYMqy6R22teoybKCg.png" class="ir-img">
                    </div>
                    <div class="content px-3 w-50 h-100 py-2">
                        <h5 class="mb-2">Titolo</h5>
                        <div class="d-flex mb-2">
                            <span class="ir-badge me-1">Lightaaaaaaaaa</span>
                            <span class="ir-badge me-1">Light</span>
                            <span class="ir-badge me-1">Light</span>
                            <span class="ir-badge me-1">Light</span>
                        </div>
                        <div class="information d-flex">
                            <small class="me-1">21 AGO 2023</small>
                            <div class="d-flex"></div>
                        </div>
                    </div>
                    <div class="price flex-shrink-0 w-25 d-flex justify-content-center align-items-end">
                        <div class="d-flex">
                            <div class="sconto h-100 d-flex align-items-center me-1">
                                <span class="sconto-span">50%</span>
                            </div>
                            <div>
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
        </div>
    </section>
</template>

<style scoped lang="scss">
section{
    background-color: #4b5b6a;


    .game{
        background-color: #404853;
        margin-left: -12px;
        width: 100%;
        max-height: 150px;
    }

    .ir-img{
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .content{
        .ir-badge{
            font-size: 14px;
            padding: 2px 10px;
            background-color: #4D565F;
        }
    }

    .information{
        color: lightgray;
    }

    .price{
        span{
            padding: 5px 10px;
            background-color: #38404B;
            cursor: pointer;
        }

        .sconto-span{
            background-color: #4C6D16;
            cursor: inherit;
            font-size: 28px;
            color: #BDEC48;
        }

        .prezzo-scontato{
            color: #BDEC48;
            font-size: 18px;
        }
    }
}
</style>