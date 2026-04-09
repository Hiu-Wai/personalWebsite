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
                mentioned in the
                <NuxtLink to="/" class="no-decoration">home page</NuxtLink>!!
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
                        <li>KCL Womxn in STEM Head of Events 26-27</li>
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
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-about"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis"
                >Community & Events</strong
              >

              <!-- Societies pills -->
              <p class="section-eyebrow">Societies</p>
              <div class="society-pills mb-3">
                <span class="society-pill pill-wistem">Womxn in STEM</span>
                <span class="society-pill pill-tech">KCL Tech</span>
                <span class="society-pill pill-wics">Womxn in CS</span>
              </div>

              <hr class="section-divider" />

              <!-- Organised events -->
              <p class="section-eyebrow">Organised &amp; helped run</p>
              <div class="accordion" id="organisedAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingWiSTEM">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWiSTEM"
                      aria-expanded="true"
                      aria-controls="collapseWiSTEM"
                    >
                      <span class="acc-title-row">
                        Womxn in STEM
                        <span class="event-count">14 events</span>
                      </span>
                      <span class="soc-badge badge-wistem">WiSTEM</span>
                    </button>
                  </h2>
                  <div
                    id="collapseWiSTEM"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingWiSTEM"
                    data-bs-parent="#organisedAccordion"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Welcome Games and Chill with WiSTEM</li>
                        <li>Members' Meet &amp; Greet</li>
                        <li>Mentorship Scheme Orientation / Launch</li>
                        <li>Cross-Society Networking Event</li>
                        <li>Rewriting the Code (RTC) Workshop</li>
                        <li>
                          End of Year Meet and Greet: Alumni and Friends of
                          WiSTEM
                        </li>
                        <li>Events Student Ambassador Workshop</li>
                        <li>Makerspace Event</li>
                        <li>Galentine's Crafting</li>
                        <li>Student Ambassador Consolidation Workshop</li>
                        <li>
                          International Women's Day + Closing of Mentorship
                          Scheme
                        </li>
                        <li>
                          Coding Social Collab with Competitive Programming Soc
                        </li>
                        <li>STEM Ball</li>
                        <li>Charity Bake Sale with other Womxn in Societies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item mt-2">
                  <h2 class="accordion-header" id="headingKCLTech">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseKCLTech"
                      aria-expanded="false"
                      aria-controls="collapseKCLTech"
                    >
                      <span class="acc-title-row">
                        KCL Tech
                        <span class="event-count">2 events</span>
                      </span>
                      <span class="soc-badge badge-tech">Tech</span>
                    </button>
                  </h2>
                  <div
                    id="collapseKCLTech"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingKCLTech"
                    data-bs-parent="#organisedAccordion"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>KCL Tech Meet &amp; Greet</li>
                        <li>KCL Tech Summit</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item mt-2">
                  <h2 class="accordion-header" id="headingWiCS">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWiCS"
                      aria-expanded="false"
                      aria-controls="collapseWiCS"
                    >
                      <span class="acc-title-row">
                        Womxn in CS
                        <span class="event-count">1 event</span>
                      </span>
                      <span class="soc-badge badge-wics">WiCS</span>
                    </button>
                  </h2>
                  <div
                    id="collapseWiCS"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingWiCS"
                    data-bs-parent="#organisedAccordion"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Galentine's Candle Making</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="section-divider" />

              <!-- Participated events -->
              <p class="section-eyebrow">Attended as participant</p>
              <div class="accordion" id="participatedAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingPart2026">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePart2026"
                      aria-expanded="false"
                      aria-controls="collapsePart2026"
                    >
                      <span class="acc-title-row">
                        2026
                        <span class="event-count">1 event</span>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapsePart2026"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingPart2026"
                    data-bs-parent="#participatedAccordion"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>IC Hack 2026</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item mt-2">
                  <h2 class="accordion-header" id="headingPart2025">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePart2025"
                      aria-expanded="false"
                      aria-controls="collapsePart2025"
                    >
                      <span class="acc-title-row">
                        2025
                        <span class="event-count">9 events</span>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapsePart2025"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingPart2025"
                    data-bs-parent="#participatedAccordion"
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

                <div class="accordion-item mt-2">
                  <h2 class="accordion-header" id="headingPart2024">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePart2024"
                      aria-expanded="false"
                      aria-controls="collapsePart2024"
                    >
                      <span class="acc-title-row">
                        2024
                        <span class="event-count">2 events</span>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapsePart2024"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingPart2024"
                    data-bs-parent="#participatedAccordion"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    const text = "A little bit about me...";
    const target = document.getElementById("typing-text");
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 75);
      }
    }
    typeWriter();

    const tl = gsap.timeline();

    tl.from(".description", {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.6,
      ease: "power2.out",
    }).from(
      ".custom-img",
      {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.8",
    ); // Overlap animations slightly

    const fadeInUp = (selector, delayStep = 0.1) => {
      gsap.utils.toArray(selector).forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          delay: i * delayStep,
        });
      });
    };

    fadeInUp(".accordion-item", 0.1);
    fadeInUp(".about strong", 0.1);
    fadeInUp(".about h3", 0.2);
  },
};
</script>

<style>
.bg-about {
  background-color: #f8e9f0;
}
.custom-img {
  height: auto;
  width: 350px;
  object-fit: contain;
  overflow: hidden;
}
.no-decoration {
  text-decoration: none !important;
  color: #007bff;
}
.no-decoration:hover {
  color: #0056b3;
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
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.accordion-button::after {
  margin-left: 12px; /* or 0 if you don't need spacing */
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
.acc-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1; 
  min-width: 0;
}

.soc-badge {
  flex-shrink: 0;
}
/* Society pills */
.section-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #888;
  margin: 0 0 0.5rem;
}

.section-divider {
  border: none;
  border-top: 1px solid #e8d8e0;
  margin: 1rem 0;
}

.society-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.society-pill {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
}

.pill-wistem { background: #f6d7e2; color: #72243E; }
.pill-tech   { background: #E6F1FB; color: #0C447C; }
.pill-wics   { background: #E1F5EE; color: #085041; }

/* Accordion header layout */
.accordion-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.acc-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.event-count {
  font-size: 0.72rem;
  font-weight: 600;
  background: #EEEDFE;
  color: #3C3489;
  padding: 2px 8px;
  border-radius: 10px;
}

/* Society badges inside accordion header */
.soc-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 9px;
  border-radius: 12px;
  margin-left: auto;
  flex-shrink: 0;
}

.badge-wistem { background: #f6d7e2; color: #72243E; }
.badge-tech   { background: #E6F1FB; color: #0C447C; }
.badge-wics   { background: #E1F5EE; color: #085041; }

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
