<template>

  <header>
    <div class="logo">CLIO K.</div>
    <nav>
      <a href="#">Curriculum Vitae</a>
      <a href="#">Passion</a>
      <a href="#">Compétences</a>
      <a href="#">À propos</a>
    </nav>
  </header>
</template>

<style scoped>
.custom-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 3%;
  /* On enlève le background-color: #6bec68 */
  background: transparent; 
  position: absolute; /* Permet à la navbar de flotter au-dessus de la bannière */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20; /* Doit être au-dessus du SilkBackground (z-index 0) et du titre (z-index 1) */
}
/* Conservez le reste de vos styles pour le logo et les liens */
</style>