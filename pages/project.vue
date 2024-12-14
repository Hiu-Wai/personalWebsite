<template>
  <body class="d-flex h-100 text-center text-white custom-bg">
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
                  <h2>{{ project.title }}</h2>
                  <h5>{{ id }}</h5>
                  <img
                    class="bd-placeholder-img card-img-top img-fluid custom-size rounded mx-auto d-block"
                    width="100%"
                    height="300"
                    :src="project.image"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    :style="getImageStyle(id)"
                  />
                  <title>Placeholder</title
                  ><rect width="100%" height="100%" fill="#F5F9E9"></rect>
                  <div class="card-body">
                    <p class="card-text" v-html="project.shortDescription"></p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
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
        </div>
      </main>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      projects: null, // Initialize as null to hold the fetched data
    };
  },
  mounted() {
    // Access the Vuex store to fetch all projects
    this.projects = this.$store.state.projects;
  },
  methods: {
    getImageStyle(id) {
      // Return a specific background color for the given ID
      if (id === "n0erng2887b0v0luu579") {
        return { backgroundColor: "#00838f" };
      }
      // Default background color
      return { backgroundColor: "#C7FFED" };
    },
  },
};
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
  background-image: url("C:\\Users\\Chloe\\Desktop\\Coding\\personalWebsite\\public\\images\\background-image2.jpg"); /* Path to your image */
  background-size: cover; /* Make the image cover the whole page */
  background-repeat: no-repeat; /* Prevent repeating */
  background-position: center center; /* Center the image */
  margin: 0; /* Remove default margins */
}
</style>
