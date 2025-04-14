<template>
  <div class="d-flex h-100 body">
    <div class="container-fluid text-start">
      <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div class="row">
          <div class="col-lg-6 px-0">
            <h1 class="display-4 fst-italic">A little about me...</h1>
            <div class="description">
              <p class="my-3">
                I'm Chloe Ho (Hiu Wai Ho) and I am currently a computer science
                undergraduate at King's College London.
              </p>
              <p class="my-3">
                I enjoy coding due to its problem-solving nature and the
                satisfaction felt afterwards. But I am eager to explore the
                other different branches of computer science as it is such a big
                field. Feel free to contact me using the contact details
                mentioned in the home page!!
              </p>
            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-end">
            <img
              src="\public\images\profile2.jpg"
              class="custom-img img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <div class="row mb-2 about">
        <div class="col-md-6">
          <div
            class="row row row-eq-height g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body-secondary"
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
              <div class="accordion" id="aboutAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingAchievements">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseAchievements"
                      aria-expanded="true"
                      aria-controls="collapseAchievements"
                    >
                      Achievements
                    </button>
                  </h2>
                  <div
                    id="collapseAchievements"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingAchievements"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          Gold in
                          <a
                            href="https://ukmt.org.uk/senior-challenges/senior-mathematical-challenge"
                            >Senior Maths Challenge 2023</a
                          >
                        </li>
                        <li>
                          Gold in
                          <a
                            href="https://edu.rsc.org/enrichment/uk-chemistry-olympiad"
                            >UK Chemistry Olympiad 2024</a
                          >
                        </li>
                        <li>
                          Distinction in
                          <a href="https://www.bebras.uk/"
                            >UK Bebras Challenge 2024</a
                          >
                        </li>
                        <li>Shortlisted in UCL Minerva's Hack 2025</li>
                        <li>
                          Judge's Favourite Robot –
                          <a href="https://unibots.uk/">Unibots 2025</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item mt-2">
                  <h2 class="accordion-header" id="headingLeadershipRoles">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseLeadershipRoles"
                      aria-expanded="true"
                      aria-controls="collapseLeadershipRoles"
                    >
                      Leadership roles
                    </button>
                  </h2>
                  <div
                    id="collapseLeadershipRoles"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingLeadershipRoles"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>KCL HKPass Subcommitee 24-25</li>
                        <li>KCL WiSTEM Ambassador 24-25</li>
                        <li>KCL Womxn in STEM Events Officer 25-26</li>
                        <li>
                          KCL Women in Computer Science Co Events Officer 25-26
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="row row row-eq-height g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body-secondary"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis"
                >Community & Events</strong
              >
              <p class="mb-2 text-body-secondary">
                Outside of my academic work, I'm actively involved in various
                student societies that align with my interests and values.
              </p>
              <div class="accordion" id="aboutAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSocieties">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSocieties"
                      aria-expanded="true"
                      aria-controls="collapseSocieties"
                    >
                      Participating societies
                    </button>
                  </h2>
                  <div
                    id="collapseSocieties"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingSocieties"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Womxn in STEM</li>
                        <li>Womxn in CS</li>
                        <li>KCL Tech</li>
                        <li>KCL Abacus</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item mt-2">
                  <h2 class="accordion-header" id="headingEvents">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEvents"
                      aria-expanded="true"
                      aria-controls="collapseEvents"
                    >
                      Participated events
                    </button>
                  </h2>
                  <div
                    id="collapseEvents"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingEvents"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>KCL CultureHack 2024</li>
                        <li>UCL Holistic AI Hackathon 2024</li>
                        <li>KCL HackTheLion 2025</li>
                        <li>UCL Minerva's Hack 2025</li>
                        <li>KCL Tech4Good Hackathon 2025</li>
                        <li>Royal Hackaway v8</li>
                        <li>KCL FirstYearHack 2025</li>
                        <li>HackLondon 2025</li>
                        <li>HackSprint 2025</li>
                        <li>Unibots 2025</li>
                        <li>Encode AI Hackathon 2025</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.custom-img {
  height: auto;
  width: 350px;
  object-fit: contain;
  overflow: hidden;
}

@media (max-width: 576px) {
  .custom-img {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .custom-img {
    width: 250px;
  }
}

@media (max-width: 992px) {
  .custom-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
  }
}

.about h3,
.about ul {
  color: #212529;
}

.about .container-fluid {
  padding-left: 25px;
  padding-right: 25px;
}

.about .description {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

/* Accordion custom styles */
.accordion {
  border-radius: 10px;
}

.accordion-item {
  background-color: #f0f2f5;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.accordion-button {
  background-color: #e9ecef;
  font-weight: 600;
  color: #333;
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.accordion-button:not(.collapsed) {
  background-color: #d6e3ff;
  color: #003e8a;
}

.accordion-button:focus {
  box-shadow: none;
}

.accordion-body {
  background-color: #ffffff;
  padding: 16px;
  font-size: 0.95rem;
  line-height: 1.6;
  border-radius: 8px;
}

.accordion ul {
  padding-left: 20px;
  margin: 0;
  font-size: 20px;
}

.accordion li {
  margin-bottom: 6px;
}

@media (max-width: 768px) {
  .accordion-button {
    font-size: 0.95rem;
    padding: 10px 14px;
  }

  .accordion-body {
    font-size: 0.9rem;
    padding: 14px;
  }
}
</style>
