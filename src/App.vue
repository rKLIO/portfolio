<script setup>
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import SkillCard from './components/SkillCard.vue'
import RealisationCarousel from './components/RealisationCarousel.vue'
import Tools from './components/Tools.vue'
import SilkBackground from './components/SilkBackground.vue'

</script>

<template>
  
  <Navbar />

  <section style="padding:0;">
    <div class="banner anim">
      <SilkBackground 
      :speed="5" 
      :scale="1" 
      color="#6bec68" 
      :noiseIntensity="1.5" 
      :rotation="0" 
    />
      <h1 class="banner-title" style="padding-left: 30px;"><b> CLIO Kendrick </b></h1>
    </div>
  </section>

  <section class="main-content">
    <section id="about">
      <!-- <h2>À propos de moi</h2> -->
      <p><em>" Je suis un étudiant en informatique passionné par le développement web et les nouvelles technologies. J'aime créer des projets innovants et apprendre constamment de nouvelles compétences pour améliorer mes connaissances dans le domaine de l'informatique. "</em></p>
    </section>

  
  <section id="outils">
    <h2>Ma Stack Technique</h2>
    
    <Tools>
      <template #langages>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="tool-icon" />
          <span>Python</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="tool-icon" />
          <span>JavaScript</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" class="tool-icon" />
          <span>PHP</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" class="tool-icon" />
          <span>Dart</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" class="tool-icon" />
          <span>Rust</span>
        </div>
      </template>

      <template #bdd>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="tool-icon" />
          <span>MySQL</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" class="tool-icon" />
          <span>SQLite</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" class="tool-icon" />
          <span>MongoDB</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" class="tool-icon" />
          <span>Supabase</span>
        </div>
      </template>

      <template #web>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="tool-icon" />
          <span>HTML5</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="tool-icon" />
          <span>CSS3</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" class="tool-icon" />
          <span>WordPress</span>
        </div>
      </template>

      <template #frameworks>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" class="tool-icon" />
          <span>Django</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="tool-icon" />
          <span>Vue JS</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" class="tool-icon" />
          <span>Next JS</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" class="tool-icon" />
          <span>Nest JS</span>
        </div>
      </template>

      <template #outils>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="tool-icon" />
          <span>Git</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="tool-icon" />
          <span>GitHub</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" class="tool-icon" />
          <span>Apache2</span>
        </div>
      </template>

      <template #bibliothèques>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="tool-icon" />
          <span>PythonArcade</span>
        </div>
        <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="tool-icon" />
          <span>GSAP</span>
        </div>
        <!-- <div class="tool-card">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="tool-icon" />
          <span>React</span>
        </div> -->
      </template>

    </Tools>
  </section>  

  <!-- <section id="competence">
    <h2>Compétences</h2>
    <div class="skills-grid">
      <SkillCard title="Développement" text="TestP" />
      <SkillCard title="Design" text="TestP" />
      
      </div>
  </section> -->

  <section class="game-section" style="padding: 0 5%">
      <h2>Mes Réalisations</h2> 
      <RealisationCarousel />
    </section>
  </section>

  <Footer />
  
</template>