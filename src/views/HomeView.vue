<script setup>

import { onMounted, onUnmounted } from 'vue' // AJOUT : Import de onMounted
import gsap from 'gsap'         // AJOUT : Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger' // AJOUT : Import ScrollTrigger

import SkillCard from '../components/SkillCard.vue'
import RealisationCarousel from '../components/RealisationCarousel.vue'
import Tools from '../components/Tools.vue'
import SilkBackground from '../components/SilkBackground.vue'

// Enregistrement du plugin
// gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // On "épingle" la bannière au sommet
  ScrollTrigger.create({
    trigger: ".banner",
    start: "top top",
    end: "bottom top", // L'effet dure tant que le bas de la bannière n'a pas atteint le haut
    pin: true,        // Bloque la bannière
    pinSpacing: false // IMPORTANT : Empêche GSAP de créer un vide, permet l'overlap
  })

  // Optionnel : On fait disparaître le titre doucement au scroll
  gsap.to(".banner-title", {
    scrollTrigger: {
      trigger: ".banner",
      start: "top top",
      end: "bottom 20%",
      scrub: true
    },
    opacity: 0,
    y: -50
  })

  // On récupère tous les éléments à animer
  const sections = gsap.utils.toArray('.reveal');

  sections.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%", // Déclenche l'anime quand l'élément est à 85% du bas de l'écran
        toggleActions: "play none none none", // Joue l'anime une seule fois
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill(true));
  ScrollTrigger.refresh();
  gsap.killTweensOf("*");
});
</script>

<template>
  
<!-- style="padding:0;" -->
  
    <div class="banner">
      <SilkBackground 
      :speed="15" 
      :scale="1" 
      color="#6bec68" 
      :noiseIntensity="2" 
      :rotation="0" 
    />
      <h1 class="banner-title" style="padding-left: 30px;"><b> CLIO Kendrick </b></h1>
    </div>

  <section class="main-content">
    <section id="about" class="about-section" >
      <!-- <h2>À propos de moi</h2> -->
      <p><em>" Étudiant en informatique passionné par le développement web et les nouvelles technologies. J'aime créer des projets innovants et apprendre constamment de nouvelles compétences pour améliorer mes connaissances dans le domaine de l'informatique. "</em></p>
    </section>

  
  <section id="outils">
    <h2 >Ma Stack Technique</h2>
    
    <Tools class="reveal">
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

  <section class="game-section reveal">
      <h2>Mes Réalisations</h2> 
      <RealisationCarousel />
    </section>
  </section>

  
</template>

<style scoped>


.banner {
    height: 700px; 
    margin-top: 0;
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative; /* Garde la bannière fixe au scroll */
    /* top: 0;           <--- AJOUTE CECI pour activer le sticky */
    z-index: 1;       /* Reste en dessous du main-content */
    overflow: hidden;
    background: transparent;
}

.banner-title {
    position: absolute; /* Position absolue pour placer le texte où vous le souhaitez */
    bottom: 20px; /* Distance entre le texte et le bas de la bannière */
    left: 20px; /* Distance entre le texte et le bord gauche */
    font-weight: 500; /* Texte en gras */
    color: #fff; /* Couleur noire pour le texte */
    margin: 0; /* Supprime les marges par défaut */
}

.banner h1 {
    font-size: 13em;
    margin: 0;
}

.main-content {
    position: relative;
    z-index: 10; 
    background-color: #181818; 
    box-shadow: 0 -50px 50px rgba(24, 24, 24, .9);
    /* AJOUTE CECI : */
    padding: 1.5rem 5%;
    margin-top: 0;
    /* Assure-toi qu'il n'y a pas d'overflow caché ici qui couperait l'ombre */
    padding-top: 2rem; /* Évite la fusion des marges */
}
</style>