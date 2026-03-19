<template>
    <footer>    
        <p>Découvrir mes réseaux</p>
        <div class="social">
            <a href="https://www.linkedin.com/in/kendrick-clio-20b5b92b6/"> LinkedIn</a>
            <a href="https://github.com/rKLIO">GitHub</a>
        </div>
    </footer>
</template>

<style scoped>

footer {
    background-color: #333;
    color: white;
    padding: 20px 10%;
    text-align: center;
}

footer p {
    margin: 5px 0;
}

footer .social {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
}

footer .social a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
}

.footer-element {
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
</style>