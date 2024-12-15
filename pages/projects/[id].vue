<template>
  <body class="d-flex h-100 text-center text-white custom-bg">
    <div class="cover-container d-flex vw-100 vh-90 p-3 mx-auto flex-column">
      <div class="d-flex justify-content-center">
        <div
          id="carouselExampleIndicators"
          class="carousel slide bg-dark"
          data-bs-ride="carousel"
          style="width: 75%; border-radius: 10px"
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
                      <i :class="getIcon(project.people.icon)" class="me-2"></i>
                      <span>{{ project.people.status }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i :class="getIcon(project.type.icon)" class="me-2"></i>
                      <span>{{ project.type.status }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i :class="getIcon('calendar')" class="me-2"></i>
                      <span>{{ project.timeFrame }}</span>
                    </div>
                  </div>
                  <br />
                  <p v-html="project.longDescription"></p>
                </div>
                <div class="col-md-4">
                  <div class="image-wrapper">
                    <img :src="project.image" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6">
                  <h1>{{ project.title }}</h1>
                  <span
                    ><i :class="getIcon('language')" class="me-2"></i>
                    Techniques used:
                    {{ project.techniques.join(", ") }}</span
                  >
                  <br />
                  <i :class="getIcon('takeaway')" class="me-2"></i>
                  <span>Takeaways: {{ project.takeaway }}</span>
                  <br />
                  <i :class="getIcon('note')" class="me-2"></i>
                  <span>Note: {{ project.note }}</span>
                  <div class="justify-content-between">
                    <div class="button-group mt-4">
                      <a
                        v-for="button in project.buttons"
                        :key="button.text"
                        :href="button.hyperlink"
                        class="btn btn-lg btn-primary m-2"
                      >
                        {{ button.text }}
                      </a>
                      <NuxtLink to='/project'>
                          <button
                            type="button"
                            class="btn btn-lg btn-outline-secondary"
                          >
                            Look at other projects
                          </button>
                        </NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="image-wrapper">
                    <img :src="project.image" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else><p>Project not found.</p></div>
          <button
            class="carousel-control-prev justify-content-between custom-prev"
            style="padding-left: 30px"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next justify-content-between custom-next"
            style="right: -80px"
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
</style>

<script>
export default {
  data() {
    return {
      project: null,
    };
  },
  computed: {
    icons() {
      console.log(this.$store.state.icons);
      return this.$store.state.icons;
    },
  },
  mounted() {
    // Fetch project data from the Vuex store
    const projectId = this.$route.params.id;
    this.project = this.$store.state.projects[projectId];
  },
  methods: {
    // Fetch the correct Bootstrap icon class
    getIcon(iconKey) {
      console.log(this.icons[iconKey] + " icon key");
      return this.icons[iconKey] || ""; // Fallback to empty if iconKey doesn't exist
    },
  },
};
</script>
