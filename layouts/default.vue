<template>
    <div>
      <Navbar /> <!-- Include the navbar component -->
      <slot  /> <!-- This will render the page content -->
    </div>
  </template>
  
  <script>
  import Navbar from '~/components/Navbar.vue'
  
  export default {
    components: {
      Navbar
    }
  }
  </script>
  
  <style>
  /* Add any global styles here */
  </style>
  