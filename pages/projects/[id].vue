<script setup>
import { useRoute } from "vue-router"; // To access the dynamic route parameter
import { computed } from "vue";
import { useMainStore } from "~/store/index"; // Import the store

// Access the route to get the 'id' parameter
const route = useRoute();
const projectId = route.params.id; // Dynamic 'id' from URL

// Access the store
const store = useMainStore();

// Fetch the project based on the 'id'
const project = computed(() => store.projects[projectId]);
const icons = computed(() => store.icons);

function getImageStyle() {
  //Return specific background colour for the given ID
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
  <body class="d-flex h-100 text-center text-white custom-bg">
    <div class="cover-container d-flex vw-100 vh-90 p-3 mx-auto flex-column">
      <div class="d-flex justify-content-center">
        <div
          id="carouselExampleIndicators"
          class="carousel slide bg-dark"
          data-bs-ride="carousel"
          style="border-radius: 10px"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner align-items-center" v-if="project">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-7">
                  <h1>{{ project.title }}</h1>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <i :class="getIcon(project.people.icon), fa-sm" class="me-2"></i>
                      <span class = "ml-2 ml-md-3 ml-lg-4">{{ project.people.status }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i :class="getIcon(project.type.icon), fa-sm" class="me-2"></i>
                      <span class = "ml-2 ml-md-3 ml-lg-4">{{ project.type.status }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i :class="getIcon('calendar'), fa-sm" class="me-2"></i>
                      <span class = "ml-2 ml-md-3 ml-lg-4">{{ project.timeFrame }}</span>
                    </div>
                  </div>
                  <br />
                  <p v-html="project.longDescription"></p>
                </div>
                <div class="col-md-4">
                  <div class="image-wrapper">
                    <img
                      :src="project.image"
                      class="img-fluid project-image"
                      :style="getImageStyle()"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-7">
                  <h1>{{ project.title }}</h1>
                  <span
                    ><i :class="getIcon('language'), fa-sm" class="me-2"></i>
                    Techniques used:
                    {{ project.techniques.join(", ") }}</span
                  >
                  <br />
                  <i :class="getIcon('takeaway'), fa-sm" class="me-2"></i>
                  <span>Takeaways: {{ project.takeaway }}</span>
                  <br />
                  <i :class="getIcon('note'), fa-sm" class="me-2"></i>
                  <span>Note: {{ project.note }}</span>
                  <div class="justify-content-between">
                    <div class="button-group mt-4">
                      <a
                        v-for="button in project.buttons"
                        :key="button.text"
                        :href="button.hyperlink"
                        class="btn btn-lg btn-primary m-2 project-button"
                      >
                        {{ button.text }}
                      </a>
                      <NuxtLink to="/project">
                        <button type="button" class="btn btn-lg btn-primary project-button">
                          Look at other projects
                        </button>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="image-wrapper">
                    <img
                      :src="project.image"
                      class="img-fluid project-image"
                      :style="getImageStyle()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else><p>Project not found.</p></div>
          <button
            class="carousel-control-prev justify-content-between custom-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next justify-content-between custom-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
#carouselExampleIndicators {
  padding: 5rem;
  min-height: 60vh;
  margin:auto; 
  width: 80vw;
}
.project-image{
  width: auto;
  height: auto;
  object-fit: cover;
}

.btn-primary {
  background-color: #00f6ed;
  color: #708189;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background-color: #7be67a;
  color: #708189;
}


/* Small devices (landscape phones, 576px and up) */
@media (max-width: 576px) {
  .carousel-item, .project-button{
    font-size:9px;
  }
}

/* Medium devices (tablets, 768px and up)*/
@media (max-width: 768px) {
  .carousel-item, .project-button{
    font-size:15px;
  }

}

/* Large devices (desktops, 992px and up) */
@media (max-width: 992px) {
  .carousel-item, .project-button{
    font-size:16px;
  }

}

/* X-Large devices (large desktops, 1200px and up) */
@media (max-width: 1200px) {
  .carousel-item, .project-button{
    font-size:18px;
  }

}

/* XX-Large devices (larger desktops, 1400px and up)*/
@media (min-width: 1400px) {
  .carousel-item, .project-button{
    font-size:24px;
  }

}
.carousel-control-next{
  padding-right: -50px;
  padding-left: 30px;
}
.carousel-control-prev{
  padding-left: 50px;
}
</style>
