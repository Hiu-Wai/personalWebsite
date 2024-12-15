<template>
  <body class="d-flex h-100 custom-bg">
    <div class="container-fluid text-start">
      <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div class="row">
          <div class="col-lg-6 px-0">
            <h1 class="display-4 fst-italic">A little about me...</h1>
            <p class="lead my-3">
              I'm Chloe Ho (Ho Hiu Wai) and I am currently a computer science
              undergraduate at King's College London.
            </p>
            <p class="lead my-3">
              I enjoy coding due to its problem-solving nature and the
              satisfaction felt afterwards. But I am eager to explore the other
              different branches of computer science as it is such a big field.
              Feel free to contact me using the contact details mentioned in the
              home page!!
            </p>
          </div>
          <div class="col-lg-6 d-flex justify-content-end">
            <img
              src="\public\images\profile2.jpg"
              class="custom-img img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-md-6">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body-secondary"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis"
                >Education</strong
              >
              <h3 class="mb-0 text-body-secondary">
                Cheltenham Ladies College 2017-2024
              </h3>
              <h3 class="mb-0 text-body-secondary">
                King's College London 2024~
              </h3>
              <br />
              <strong class="d-inline-block mb-2 text-primary-emphasis"
                >Achievements</strong
              >
              <ul>
                <li>Gold in Senior Maths Challenge 2023</li>
                <li>Gold in Chemistry Olympiad 2024</li>
                <li>Distinction in UK Bebras Challenge 2024</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body-secondary"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis"
                >Participating societies</strong
              >
              <ul>
                <li>Womxn in STEM</li>
                <li>Womxn in CS</li>
                <li>KCL Tech</li>
                <li>KCL Abacus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<style>
.custom-img {
  height: 100%;
  width: 350px;
  object-fit: contain;
  overflow: hidden;
}
.h3 {
  color: black;
}
ul {
  color: black;
}
.container-fluid {
  padding-left: 25px;
  padding-right: 25px;
}
</style>
