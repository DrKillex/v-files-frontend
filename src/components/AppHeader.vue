<script>

export default {
  name: "AppHeader",
}
</script>

<template>
  <header>
    <div class="container py-4">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <!-- <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg> -->
          LOGO
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-white">NEGOZIO</a></li>
          <li><a href="#" class="nav-link px-2 text-white">COMUNITÀ</a></li>
          <li><a href="#" class="nav-link px-2 text-white">INFORMAZIONI</a></li>
          <li><a href="#" class="nav-link px-2 text-white">ASSISTENZA</a></li>
        </ul>

        <ul class="nav justify-content-end ">
          <li><a href="#" class="coloreinstalla nav-link px-2 text-white">Installa Steam</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Accedi</a></li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link px-2 text-white dropdown-toggle" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Lingua</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">IT</a></li>
              <li><a class="dropdown-item" href="#">ENG</a></li>
              <li><a class="dropdown-item" href="#">FR</a></li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  </header>
</template>

<style>
header {
  background-color: #171a21;
  color: white;
}

.coloreinstalla {
  background-color: #5e7b11;
}
</style>