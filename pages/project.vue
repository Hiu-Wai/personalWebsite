<template>
  <div class="d-flex h-100 text-center text-white body">
    <div class="cover-container d-flex vw-100 vh-90 p-3 mx-auto flex-column">
      <div class="d-flex justify-content-center">
        <div
          class="p-5 mb-4 rounded-3 text-center bg-2"
          style="width: 75%; background-color: #00312f"
        >
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Projects</h1>
          </div>
        </div>
      </div>

      <main class="px-3">
        <div class="album py-5">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col" v-for="(project, id) in projects" :key="id">
                <div class="card h-100">
                  <h2 class="text-uppercase">{{ project.title }}</h2>
                  <div class = "hover-slide">
                  <img
                    class="project-image bd-placeholder-img card-img-top img-fluid custom-size rounded mx-auto d-block"
                    width="100%"
                    :src="project.image"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    :style="getImageStyle(id)"
                  />
                  <title>Placeholder</title
                  ><rect width="100%" height="100%" fill="#F5F9E9"></rect>
                </div>
                  <div class="card-body d-flex flex-column">
                    <p class="card-text" v-html="project.shortDescription"></p>
                    <div
                      class="btn-group mt-auto d-flex justify-content-center"
                    >
                      <NuxtLink :to="'/projects/' + id">
                        <button
                          type="button"
                          class="btn btn-lg btn-outline-secondary"
                        >
                          Learn more
                        </button>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import { useMainStore } from "~/store/index"; // Import the Pinia store
import { computed } from "vue";

// Access the store
const store = useMainStore();

// Use the `projects` state from the store
const projects = computed(() => store.projects);

// Optional: Define the method for image styling (if needed)
function getImageStyle(id) {
  // Return a specific background color for the given ID
  if (id === "n0erng2887b0v0luu579") {
    return { backgroundColor: "#00838f" };
  }
  // Default background color
  return { backgroundColor: "#C7FFED" };
}
</script>
<style>
.custom-size {
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
}
.card {
  background-color: #d1fffd;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.btn {
  background-color: #d1ffd7;
}
.btn:hover,
.btn:focus,
.btn:active,
.btn.active,
.open > .dropdown-toggle.btn {
  background-color: #b2ddf7;
}
.bg-2 {
  background-image: url("/public/images/background-image2.jpg"); /* Path to your image */
  background-size: cover; /* Make the image cover the whole page */
  background-repeat: no-repeat; /* Prevent repeating */
  background-position: center center; /* Center the image */
  margin: 0; /* Remove default margins */
}

h2 {
  font-family: "PT Sans";
  font-style: italic !important;
}
.container .hover-slide{
  display: inline-block;
  overlay: hidden;
}
.container .hover-slide .project-image{
  transition: transform 0.3s ease-in-out;
}
.container .project-image {
  height: 33vh;
  width: auto;
  overflow: hidden;
}
.container .project-image:hover {
  transform: translateX(-20px);
}

/* Medium devices (tablets, 768px and up)*/
@media (max-width: 768px) {
  .container .project-image:hover {
  transform: translateX(-20px);
}
  .container .project-image{
    transform: translateX(0);
  }
}

</style>
