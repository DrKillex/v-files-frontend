<script>
export default {
    name:'AppFooter'
}
</script>

<template>
    <footer class="p-3">
        
        <div class="container">
            <hr>
            <div class="d-flex justify-content-between">
                <div>LOGO 2</div>
                <div>LOGO 3</div>
            </div>
            <p><small>2023 valve corporation. Tutti i diritti riservati. Tutti i marchi appartengono ai rispettivi proprietari di Boolean e degli altri paesi.</small></p>
            <ul class="d-flex nav">
                <li class="nav-link px-2 text-white"><small>IVA inclusa nel prezzo (ove applicabile)</small></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Informativa sulla privacy</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Informazioni legali</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Contratto di sottoiscrizione a Steam</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Rimborsi</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Cookie</small></a></li>
            </ul>
            <hr>
            <ul class="d-flex nav">
                <li><a href="#" class="nav-link px-2 text-white"><small>Informazioni su Valve</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Impieghi</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Steamworks</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Distribuzione su Steam</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Assistenza</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small>Buoni regalo</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small><font-awesome-icon :icon="['fab', 'facebook']" /> Steam</small></a></li>
                <li><a href="#" class="nav-link px-2 text-white"><small><font-awesome-icon :icon="['fab', 'twitter']" /> Steam</small></a></li>
            </ul>
        </div>
    </footer>
</template>


<style scoped>
    footer {
        padding: 20px;
        /* background-color: grey; */
        background-color: #171a21;
        height: 290px;
        color: white;
    }
</style>