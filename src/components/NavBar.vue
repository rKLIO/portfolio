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

/* header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 3%;
    background-color: #6bec68;

} */
header {
    background-color: transparent !important; /* Force la transparence */
    position: absolute;
    width: 100%;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 3%;
}

header .logo {
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