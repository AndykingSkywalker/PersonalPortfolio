import openSourcePicture from "../../Images/PortfolioImages/ajk_pic.png";
import ctrlAltElitePicture from "../../Images/PortfolioImages/ctrl_alt_elite_pic.png";
import dolphinityPicture from "../../Images/PortfolioImages/dolphinity_pic.png";
import portfolioPicture from "../../Images/PortfolioImages/myportfolio_picture.png";
import blogPicture from "../../Images/PortfolioImages/my-blog-pic.png";

function Portfolio() {
    return (
      <div>
        <section id="projects" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '600px' }}> {/* Adjust max width as needed */}
            <h2>QA Projects</h2>
            <details class="project">
              <summary class="project-title">
                <h3>Open Source Project</h3>
              </summary>
              <img
                src={openSourcePicture}
                alt="Screenshot of the piano website"
                class="project-image"
                width="750rem"
                style={{border: "2px solid white"}}
              />
              <div class="accordion-content">
                <p class="project-description">
                  This project was based on an E-Commerce site we made previously, I decided to add a CI/CD pipeline along with making the site responsive for different devices <a href="https://github.com/AndykingSkywalker/OpenSourceFe2" target="_blank">Check it out here</a>
                </p>
              </div>
            </details>
            <details class="project">
              <summary class="project-title">
                <h3>Ctrl Alt ELite</h3>
              </summary>
              <img
                src={ctrlAltElitePicture}
                alt="Screenshot of the fotomatic website"
                class="project-image"
                width="750rem"
                style={{border: "2px solid white"}}
              />
              <div class="accordion-content">
                <p class="project-description">
                  This was our first QA project and was a Full Stack real estate website, utilising React for our front end <a href="https://github.com/AndykingSkywalker/ctrl_alt_elite" target="_blank">Check it out here</a>
                </p>
              </div>
            </details>
            <details class="project">
              <summary class="project-title">
                <h3>Dolphinity</h3>
              </summary>
              <img
                src={dolphinityPicture}
                alt="Screenshot of my Reynholm Industries website"
                class="project-image"
                width="750rem"
                style={{border: "2px solid white"}}
              />
              <div class="accordion-content">
                <p class="project-description">
                  This was a CI/CD project where we took an existing repo, created a Monorepo which links to Jenkins and Docker for automatic integration and deployment <a href="https://github.com/AndykingSkywalker/MonorepoALA" target="_blank">Check it out here</a>
                </p>
              </div>
            </details>
          </div>
        </section>
        <section id="projects" style={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
          <div style={{ maxWidth: '600px' }}> {/* Adjust max width as needed */}
            <h2>Codecademy Projects</h2>
            <details class="project">
              <summary class="project-title">
                <h3>Java Piano</h3>
              </summary>
              <img
                src="https://i.imgur.com/kk8X9Ro.png"
                alt="Screenshot of the piano website"
                class="project-image"
                width="750rem"
              />
              <div class="accordion-content">
                <p class="project-description">
                  An interactive piano to teach you how to play the Happy Birthday song. <a href="https://andykingskywalker.github.io/Java-Piano/" target="_blank">Check it out here</a>
                </p>
              </div>
            </details>
            <details class="project">
              <summary class="project-title">
                <h3>Fotomatic Website</h3>
              </summary>
              <img
                src="https://i.imgur.com/j3vsNHz.png"
                alt="Screenshot of the fotomatic website"
                class="project-image"
                width="750rem"
              />
              <div class="accordion-content">
                <p class="project-description">
                  A website I made to show good use of Flex. <a href="https://andykingskywalker.github.io/Fotomatic-CSS/" target="_blank">Check it out here</a>
                </p>
              </div>
            </details>
            <details class="project">
              <summary class="project-title">
                <h3>Reynholm Industries Website</h3>
              </summary>
              <img
                src="https://i.imgur.com/GAlpSKB.png"
                alt="Screenshot of my Reynholm Industries website"
                class="project-image"
                width="750rem"
              />
              <div class="accordion-content">
                <p class="project-description">
                  A corporate website I designed based on The IT Crowd. <a href="https://andykingskywalker.github.io/Flexbox-Company/" target="_blank">Check it out here</a>
                </p>
              </div>
            </details>
          </div>
        </section>
        <section id="projects" style={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
          <div style={{ maxWidth: '600px' }}> {/* Adjust max width as needed */}
            <h2>Personal Projects</h2>
            <details class="project">
              <summary class="project-title">
                <h3>My Blog</h3>
              </summary>
              <img
                src={blogPicture}
                alt="Screenshot of the fotomatic website"
                class="project-image"
                width="750rem"
              />
              <div class="accordion-content">
                <p class="project-description">
                  This is a blog I created to showcase my Web Development skills, My main feature is a slideshow of images E.g. A gallery <a href="https://github.com/AndykingSkywalker/blog-project" target="_blank">Check it out here</a>
                </p>
              </div>
            </details>
            <details class="project">
              <summary class="project-title">
                <h3>Personal Portfolio</h3>
              </summary>
              <img
                src={portfolioPicture}
                alt="Screenshot of my Reynholm Industries website"
                class="project-image"
                width="750rem"
              />
              <div class="accordion-content">
                <p class="project-description">
                  This is my first portfolio website, my main achievement from this is being able to deploy my site to GitHub pages. <a href="https://andykingskywalker.github.io/Portfolio-Website/" target="_blank">Check it out here</a>
                </p>
              </div>
            </details>
          </div>
        </section>
      </div>
    );
  }
  
  export default Portfolio;
  