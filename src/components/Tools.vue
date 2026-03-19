<script setup>
import { ref } from 'vue'

// Liste de tes catégories (Langages, Frameworks, etc.)
// On définit un nom propre pour l'affichage et un ID pour le slot technique
const categories = [
  { name: 'Langages', slot: 'langages' },
  { name: 'Bases de données', slot: 'bdd' },
  { name: 'Web', slot: 'web' },
  { name: 'Frameworks', slot: 'frameworks' },
  { name: 'Bibliothèques', slot: 'bibliothèques' },
  { name: 'Outils', slot: 'outils' }
]

const activeIndex = ref(0) 

const selectTab = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="tabs-wrapper">
    <div class="tabs-container">
      <div class="tabs">
        <label 
          v-for="(category, index) in categories" 
          :key="category.slot"
          class="tab" 
          :class="{ 'active-text': activeIndex === index }"
          @click="selectTab(index)"
        >
          {{ category.name }} </label>
        <span class="glider" :style="{ transform: `translateX(${activeIndex * 100}%)` }"></span>
      </div>
    </div>

    <div class="tabs-content">
      <transition name="roll-up" mode="out-in">
        <div :key="activeIndex" class="skills-grid">
          <slot :name="categories[activeIndex].slot"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* --- STYLE DU GLIDER (Inspiré de ton Codepen) --- */
.tabs-container {
  display: flex;
  justify-content: center;
  padding: 30px 0;
}

.tabs {
  display: flex;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.1), 0 6px 12px 0 rgba(0,0,0,0.1);
  padding: 0.75rem;
  border-radius: 99px;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 180px; /* Largeur fixe pour le calcul du glider */
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.15s ease-in;
  z-index: 2;
  color: #666;
}

.active-text {
  color: #e73700; /* Ton orange */
}

.glider {
  position: absolute;
  height: 54px;
  width: 180px;
  background-color: #f2f2f2; /* Couleur grise légère derrière le texte actif */
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
  left: 0.75rem;
}

/* --- ANIMATION ROLL UP --- */
.roll-up-enter-active,
.roll-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.roll-up-enter-from {
  transform: translateY(30px); /* Arrive du bas */
  opacity: 0;
}

.roll-up-leave-to {
  transform: translateY(-30px); /* Part vers le haut */
  opacity: 0;
}

/* --- GRILLE DES COMPÉTENCES --- */
/* Dans Tools.vue, modifie ces classes pour accommoder plus de texte */
:deep(.tool-card) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background: #2a2a2a; /* Fond sombre pour ton thème */
  color: white;
  border-radius: 8px;
  min-width: 120px;
  text-align: center;
  border: 1px solid #444;
  transition: all 0.3s ease;
  
}

:deep(.tool-card:hover) {
  border-color: #e73700; /* Ton orange au survol */
  transform: translateY(-3px);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap; /* Permet aux cartes de passer à la ligne */
  justify-content: center;
  gap: 15px;
  max-width: 1000px;
  margin: 0 auto;
}

:deep(.tool-icon) {
  width: 45px;
  height: 45px;
  margin-bottom: 8px;
}
</style>