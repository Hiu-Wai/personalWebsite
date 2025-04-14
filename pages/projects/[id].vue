<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useMainStore } from "~/store/index";

const route = useRoute();
const projectId = route.params.id;
const store = useMainStore();

const project = computed(() => store.projects[projectId]);
const icons = computed(() => store.icons);

function getImageStyle() {
  return {
    backgroundColor:
      projectId === "n0erng2887b0v0luu579" ? "#00838f" : "#C7FFED",
  };
}

function getIcon(iconKey) {
  return icons.value[iconKey] || "";
}
</script>

<template>
  <div class="d-flex h-100 text-white text-center">
    <div class="cover-container d-flex vw-100 vh-90 p-3 mx-auto flex-column">
      <div class="d-flex justify-content-center">
        <div
          id="carouselExampleIndicators"
          class="carousel slide bg-dark rounded"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>

          <div class="carousel-inner align-items-center" v-if="project">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row centered-content">
                <div class="col-md-7 text-container">
                  <h1>{{ project.title }}</h1>

                  <div class="d-flex flex-column flex-md-row justify-content-between align-items-center brief-description my-3">
                    <div class="d-flex align-items-center mb-2 mb-md-0">
                      <i :class="getIcon(project.people.icon)" class="me-2"></i>
                      <span>{{ project.people.status }}</span>
                    </div>

                    <div class="d-flex align-items-center mb-2 mb-md-0">
                      <i :class="getIcon(project.type.icon)" class="me-2"></i>
                      <span>{{ project.type.status }}</span>
                    </div>

                    <div class="d-flex align-items-center mb-2 mb-md-0">
                      <i :class="getIcon('calendar')" class="me-2"></i>
                      <span>{{ project.timeFrame }}</span>
                    </div>
                  </div>

                  <p v-html="project.longDescription"></p>
                </div>

                <div class="col-lg-4 image-container">
                  <img
                    :src="project.image"
                    class="img-fluid project-image"
                    :style="getImageStyle()"
                    alt="Project Image"
                  />
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row centered-content">
                <div class="col-md-7 text-container">
                  <h1>{{ project.title }}</h1>
                  <p>
                    <i :class="getIcon('language')" class="me-2"></i>
                    Techniques used: {{ project.techniques.join(", ") }}
                  </p>

                  <div class="button-group mt-4">
                    <a
                      v-for="button in project.buttons"
                      :key="button.text"
                      :href="button.hyperlink"
                      class="btn btn-md btn-primary m-2 project-button"
                    >
                      {{ button.text }}
                    </a>

                    <NuxtLink to="/project">
                      <button class="btn btn-md btn-primary m-2 project-button">
                        Look at other projects
                      </button>
                    </NuxtLink>
                  </div>
                </div>

                <div class="col-lg-4 image-container">
                  <img
                    :src="project.image"
                    class="img-fluid project-image"
                    :style="getImageStyle()"
                    alt="Project Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div v-else>
            <p>Project not found.</p>
          </div>

          <button class="carousel-control-prev custom-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button class="carousel-control-next custom-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#carouselExampleIndicators {
  padding: 4rem;
  min-height: 53vh;
  width: 80vw;
  margin: auto;
}

.centered-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.text-container {
  text-align: center;
}

.image-container {
  text-align: center;
}

.project-image {
  width: 300px;
  max-height: 250px;
  object-fit: contain;
  border-radius: 10px;
  background-color: inherit;
  padding: 5px;
  margin: 0 auto;
}

.btn-primary {
  background-color: #b0f2b4;
  color: #708189;
}

.btn-primary:hover {
  background-color: #bad7f2;
  color: #708189;
}

@media (max-width: 768px) {
  #carouselExampleIndicators {
    padding: 1rem;
    width: 95vw;
  }

  .centered-content {
    flex-direction: column;
    text-align: center;
  }

  .project-image {
    max-width: 200px;
    max-height: 200px;
  }
}

@media (max-width: 576px) {
  .carousel-item {
    font-size: 14px;
  }

  .project-button {
    padding: 6px 12px;
    font-size: 14px;
  }
}

.carousel-control-next,
.carousel-control-prev {
  width: 5%;
}
</style>
