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

  body{
  font-family: 'Public Sans';
  color: white;
  font-size: 1.5rem;
  }
  .custom-bg{
    background-image: url('C:\\Users\\Chloe\\Desktop\\Coding\\personalWebsite\\public\\images\\background-image.jpg'); /* Path to your image */
            background-size: cover; /* Make the image cover the whole page */
            background-repeat: no-repeat; /* Prevent repeating */
            background-position: center center; /* Center the image */
            height: 150vh; /* Ensure the body covers the full viewport height */
            margin: 0; /* Remove default margins */
  }
  .btn{
    background-color:#00f6ed;
    color: #708189;
  }
  .btn:hover, .btn:focus, .btn:active, .btn.active, .open>.dropdown-toggle.btn{
    background-color: #7be67a;
    color: #708189;
  }  
  .image-wrapper{
    display: inline-block;
    padding: 10px;
    background-color: #C7FFED;
    border-radius: 15px;
  }
  .image-wrapper img{
    border-radius: 10px;
  }
</style>
  