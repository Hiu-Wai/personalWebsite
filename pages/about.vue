<template>
  <div class="d-flex h-100 body">
    <div class="container-fluid text-start">
      <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-about">
        <div class="row">
          <div class="col-lg-6 px-0">
            <h1 id="typing-text" class="display-4 fst-italic"></h1>
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
            class="row row row-eq-height g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-about"
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
                        <li>KCL Tech Events Secretary 25-26</li>
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
            class="row row row-eq-height g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-about"
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
                <div class="accordion" id="mainEventsAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingMainEvents">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseMainEvents"
                        aria-expanded="true"
                        aria-controls="collapseMainEvents"
                      >
                        Participated Events
                      </button>
                    </h2>
                    <div
                      id="collapseMainEvents"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingMainEvents"
                      data-bs-parent="#mainEventsAccordion"
                    >
                      <div class="accordion-body">
                        <div class="accordion" id="eventsByYearSubAccordion">
                          <!-- Events in 2025 -->
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSub2025">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSub2025"
                                aria-expanded="false"
                                aria-controls="collapseSub2025"
                              >
                                Events in 2025
                              </button>
                            </h2>
                            <div
                              id="collapseSub2025"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingSub2025"
                              data-bs-parent="#eventsByYearSubAccordion"
                            >
                              <div class="accordion-body">
                                <ul>
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

                          <!-- Events in 2024 -->
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSub2024">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSub2024"
                                aria-expanded="false"
                                aria-controls="collapseSub2024"
                              >
                                Events in 2024
                              </button>
                            </h2>
                            <div
                              id="collapseSub2024"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingSub2024"
                              data-bs-parent="#eventsByYearSubAccordion"
                            >
                              <div class="accordion-body">
                                <ul>
                                  <li>KCL CultureHack 2024</li>
                                  <li>UCL Holistic AI Hackathon 2024</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- End of sub-accordion -->
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
  </div>
</template>

<script>
export default {
  mounted() {
    const text = "A little bit about me...";
    let i = 0;
    const target = document.getElementById("typing-text");
    function typeWriter() {
      if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 75);
      }
    }
    typeWriter();
  },
};
</script>

<style>
.bg-about{
  background-color:#f8e9f0;
}
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

/* General accordion container */
.accordion {
  border-radius: 12px;
  background-color: transparent;
}

/* Each accordion item */
.accordion-item {
  background-color: #f8f9fb;
  border: 1px solid #dcdfe4;
  border-radius: 12px;
  margin-bottom: 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.035);
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;
}

.accordion-item:hover {
  box-shadow: 0 6px 14px rgba(240, 177, 177, 0.06);
}

/* Accordion header button */
.accordion-button {
  background-color: #f8e9f0;
  font-weight: 600;
  color: #2c2f33;
  padding: 14px 20px;
  font-size: 1rem;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Active/opened state */
.accordion-button:not(.collapsed) {
  background-color: #d2e3ff;
  color: #004a99;
}

/* Button hover and focus */
.accordion-button:hover {
  background-color: #f8e8f0;
  color: #1c1e21;
}

.accordion-button:focus {
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
  outline: none;
}

/* Accordion body content */
.accordion-body {
  background-color: #ffffff;
  padding: 18px 22px;
  font-size: 0.95rem;
  line-height: 1.65;
  border-top: 1px solid #e0e0e0;
  border-radius: 0 0 10px 10px;
}

/* List styling */
.accordion-body ul {
  padding-left: 1.5rem;
  margin: 0;
  list-style-type: disc;
  font-size: 1rem;
  color: #333;
}

.accordion-body li {
  margin-bottom: 8px;
}

/* Responsive tweaks */
@media (max-width: 576px) {
  .accordion-button {
    font-size: 0.95rem;
    padding: 12px 16px;
  }

  .accordion-body {
    font-size: 0.9rem;
    padding: 14px 18px;
  }

  .accordion-body ul {
    padding-left: 1.2rem;
  }
}
</style>
