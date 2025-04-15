<template>
  <div class="d-flex h-100 text-white body">
    <div class="cover-container d-flex w-100 min-vh-100 p-3 mx-auto flex-column">
      <!-- Header -->
      <div class="d-flex justify-content-center">
        <div class="p-5 mb-4 rounded-3 text-center bg-2 w-75 shadow-lg">
          <div class="container-fluid py-5">
            <h1 class="display-4 fw-bold">Projects</h1>
          </div>
        </div>
      </div>

      <!-- Main content -->
      <main class="px-3">
        <div class="album py-5">
          <div class="container text-center">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              <div class="col" v-for="(project, id) in projects" :key="id">
                <div class="card h-100 shadow-sm border-0">
                  <h2 class="text-uppercase px-3 pt-3 text-dark">{{ project.title }}</h2>
                  <div class="hover-slide rounded overflow-hidden">
                    <img
                      class="project-image card-img-top img-fluid custom-size pulse-on-touch rounded"
                      :src="project.image"
                      :style="getImageStyle(id)"
                      alt="Project thumbnail"
                    />
                  </div>
                  <div class="card-body d-flex flex-column">
                    <p class="card-text text-dark" v-html="project.shortDescription"></p>
                    <div class="btn-group mt-auto d-flex justify-content-center">
                      <NuxtLink :to="'/projects/' + id">
                        <button
                          type="button"
                          class="btn btn-outline-dark project-button mb-2"
                        >
                          Learn More
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
<style scoped>
.custom-size {
  width: 250px;
  height: 300px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  border-radius: 1rem;
}

.hover-slide {
  overflow: hidden;
  border-radius: 0.5rem; /* match Tailwind's rounded class */
}

.card {
  background-color: #ffffff;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.btn {
  background-color: #e0f7fa;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: #e3e3e3;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
  background-color: #cde7f7;
  color: white;
}

.bg-2 {
  background-image: url("/public/images/background-image2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 1rem;
}

h2 {
  font-family: "PT Sans", sans-serif;
  font-style: italic;
  font-weight: 600;
}

@media (max-width: 576px) {
  .project-button {
    padding: 0.5rem 1rem;
    font-size: 14px;
  }
  .project-image{
    height: 200px;
    width: 200px;
  }
}

@media (hover: hover) {
  .hover-slide {
    overflow: hidden;
  }
  .hover-slide .project-image:hover {
    transform: scale(1.05);
  }
}

@media (hover: none) {
  .pulse-on-touch {
    animation: pulse 0.5s;
    animation-iteration-count: 3;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}

.project-image {
  height: 30vh;
  width: auto;
  object-fit: cover;
  border-radius: 1rem;
}
</style>
