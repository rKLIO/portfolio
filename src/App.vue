<script setup>
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import SkillCard from './components/SkillCard.vue'
import RealisationCarousel from './components/RealisationCarousel.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // C'est ICI qu'on initialise Owl Carousel une fois que Vue a chargé le DOM
  if (window.jQuery) {
    $('.owl-carousel').owlCarousel({
        // Tes options Owl Carousel ici
    });
  }
});
</script>

<template>
  <Navbar />

  <section style="padding:0;">
    <div class="banner anim">
      <h1 class="banner-title" style="padding-left: 30px;">CLIO Kendrick</h1>
    </div>
  </section>

  <section id="competence">
    <h2>Compétences</h2>
    <div class="skills-grid">
      <SkillCard title="Développement" text="TestP" />
      <SkillCard title="Design" text="TestP" />
      
      </div>

    
  </section>

  <section class="game-section" style="padding: 0 5%">
      <h2>Mes Réalisations</h2> 
      <RealisationCarousel />
    </section>

  <Footer />
  
</template>