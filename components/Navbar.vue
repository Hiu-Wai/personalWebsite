<template>
  <header
    class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
    >
      <span class="name fs-2" style="color: white">Chloe Ho</span>
    </a>
  
     <ul class="nav col-12 col-lg-auto me-5 mb-2 justify-content-center mb-md-0">
      <li>
        <NuxtLink to="/" class="nav-link px-3 active" aria-current="page"
          >Home</NuxtLink>
      </li>
      <li><NuxtLink to="/about" class="nav-link px-3">About</NuxtLink></li>
      <li><NuxtLink to="/project" class="nav-link px-3">Projects</NuxtLink></li>
    </ul> 
  </header>
</template>

<style>
.nav-link {
  color: #88ccf1;
}
@media (max-width: 576px) {
  body{
    font-size:14px;
  }
}

/* Medium devices (tablets, 768px and up)*/
@media (max-width: 768px) {
  body{
    font-size:17px;
  }

}

/* Large devices (desktops, 992px and up) */
@media (max-width: 992px) {
  body{
    font-size:20px;
  }

}

/* X-Large devices (large desktops, 1200px and up) */
@media (max-width: 1200px) {
  body{
    font-size:23px;
  }

}

/* XX-Large devices (larger desktops, 1400px and up)*/
@media (min-width: 1400px) {
  body{
    font-size:26px;
  }
}
</style>