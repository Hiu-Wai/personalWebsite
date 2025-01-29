<template>
<Head>
    <link rel="icon" href="/images/profile.jpeg" type="image/jpeg" />
    <title>Chloe Ho</title>
  </Head>
  <div class="custom-bg">
    <Navbar />
    <!-- Include the navbar component -->
    <slot />
    <!-- This will render the page content -->
  </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.body {
  font-family: "Public Sans";
  color: white;
  /* Small devices (landscape phones, 576px and up) */
}
@media (max-width: 576px) {
  .body {
    font-size: 7px;
  }
}

/* Medium devices (tablets, 768px and up)*/
@media (max-width: 768px) {
  .body {
    font-size: 15px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (max-width: 992px) {
  .body {
    font-size: 16px;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (max-width: 1200px) {
  .body {
    font-size: 18px;
  }
}
@media (min-width: 1201px) {
  .body {
    font-size: 24px; /* Adjust as necessary */
  }
}
.custom-bg {
  background-image: url("/images/background-image.jpg"); /* Path to your image */
  background-size: cover; /* Make the image cover the whole page */
  background-repeat: no-repeat; /* Prevent repeating */
  background-position: center center; /* Center the image */
  background-attachment: fixed;
  min-height: 100vh; /* Ensure the body covers the full viewport height */
  margin: 0; /* Remove default margins */
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
}
main {
  flex: 1;
}
.btn {
  background-color: #00f6ed;
  color: #708189;
}
.btn:hover,
.btn:focus,
.btn:active,
.btn.active,
.open > .dropdown-toggle.btn {
  background-color: #7be67a;
  color: #708189;
}
.image-wrapper {
  display: inline-block;
  padding: 10px;
  background-color: #c7ffed;
  border-radius: 15px;
}
.image-wrapper img {
  border-radius: 10px;
}
</style>
