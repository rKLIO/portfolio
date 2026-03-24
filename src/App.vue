<script setup>
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const route = useRoute()
gsap.registerPlugin(ScrollTrigger)

const initReveals = () => {
  // On récupère tous les éléments .reveal qui ne sont pas encore animés
  const items = document.querySelectorAll('.reveal');
  
  items.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // Se déclenche quand l'élément est à 85% du bas
        toggleActions: "play none none none", // Ne joue l'animation qu'une fois
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      overwrite: "auto"
    });
  });
}

onMounted(() => {
  initReveals();
})

// TRÈS IMPORTANT : Relancer la détection quand on change de page
watch(() => route.path, () => {
  // On laisse un petit délai pour que le DOM de la nouvelle page soit prêt
  setTimeout(() => {
    ScrollTrigger.refresh();
    initReveals();
  }, 100);
})
</script>

<template>
  <Navbar />
  <router-view /> 
  <Footer />
</template>