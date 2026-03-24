<template>

  <header>
    <div class="homepage"> 
      <router-link to="/">CLIO K.</router-link> 
    </div>
    <nav>
      <router-link to="/cv">Curriculum Vitae</router-link>
      <router-link to="/passion">Passion</router-link>
      <router-link to="/#outils">Compétences</router-link>
    </nav>
  </header>
</template>

<style scoped>

/* header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 3%;
    background-color: #6bec68;

} */

header {
    background-color: transparent !important; /* Force la transparence */
    position: fixed;
    width: 100%;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 3%;
}

header .homepage a {
    text-decoration: none;
    font-size: 1.5em;
    font-weight: 600;
    color: #fff;
}

header nav {
    display: flex;
    gap: 20px;
}

header nav a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.1em;
}

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