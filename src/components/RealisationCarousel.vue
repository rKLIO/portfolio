<script setup>
import { onMounted } from 'vue'
import carteetmemoire from '../assets/image_cartesetmemoire/menu.png'
import wesportLogo from '../assets/image_wesport/logo_only.png'
import partesLogo from '../assets/image_partes/partes-logo+nom-blanc.png'

onMounted(() => {
  // Utilisation de la logique de ton fichier realisations_carousel.js
  if (window.jQuery) {
    const $ = window.jQuery;
    
    const owl = $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: true,
      rtl: false, // Attention: ton JS disait 'true', mais souvent c'est 'false' pour l'Europe
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 800,
      dots: false,
      margin: 10,
      items: 5,
      mouseDrag: true,
      touchDrag: true,
      nav: false,
    });

    // Logique de clic pour l'effet d'expansion
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  }
})

</script>

<template>
  <div class="owl-carousel custom-carousel owl-theme">
    <div class="item active" :style="{ backgroundImage: `url(${carteetmemoire})` }">
      <div class="item-desc">
        <h3>Jeux Cartes et Mémoire</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" :style="{ backgroundImage: `url(${partesLogo})` }">
      <div class="item-desc">
        <h3>Partes</h3>
        <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense
          of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" :style="{ backgroundImage: `url(${wesportLogo})` }">
      <div class="item-desc">
        <h3>WESPORT!</h3>
        <p>PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg);">
      <div class="item-desc">
        <h3>IA Vision</h3>
        <p>RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg);">
      <div class="item-desc">
        <h3>KREYOL NOU</h3>
        <p>Battle royale where 100 players fight to be the last person standing. which was a community-created mod
          for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg);">
      <div class="item-desc">
        <h3>PATHWAY PLEASE</h3>
        <p>Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.
          which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg);">
      <div class="item-desc">
        <h3>THE LEGEND OF LINK</h3>
        <p>Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.
          which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg);">
      <div class="item-desc">
        <h3>FARM LIFE</h3>
        <p>Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.
          which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* -------- title style ------- */
.line-title {
  position: relative;
  width: 400px;
}
.line-title::before,
.line-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  border-radius: 2px;
}
.line-title::before {
  width: 100%;
  background: #f2f2f2;
}
.line-title::after {
  width: 32px;
  background: #e73700;
}

/******* Middle section CSS Start ******/
/* -------- Landing page ------- */
.game-section {
  padding: 60px 50px;
}
.game-section .owl-stage {
  margin: 15px 0;
  display: flex;
  display: -webkit-flex;
}
.game-section .item {
  margin: 0 15px 60px;
  width: 320px;
  height: 400px;
  display: flex;
  display: -webkit-flex;
  align-items: flex-end;
  -webkit-align-items: flex-end;
  background: #343434 no-repeat center center / cover;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.game-section .item.active {
  width: 500px;
  box-shadow: 12px 40px 40px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 12px 40px 40px rgba(0, 0, 0, 0.25);
}
.game-section .item:after {
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
.game-section .item-desc {
  padding: 0 24px 12px;
  color: #fff;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transform: translateY(calc(100% - 54px));
  -webkit-transform: translateY(calc(100% - 54px));
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}
.game-section .item.active .item-desc {
  transform: none;
  -webkit-transform: none;
}
.game-section .item-desc p {
  opacity: 0;
  -webkit-transform: translateY(32px);
  transform: translateY(32px);
  transition: all 0.4s ease-in-out 0.2s;
  -webkit-transition: all 0.4s ease-in-out 0.2s;
}
.game-section .item.active .item-desc p {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.game-section .owl-theme.custom-carousel .owl-dots {
  margin-top: -20px;
  position: relative;
  z-index: 5;
}
/******** Middle section CSS End *******/

/***** responsive css Start ******/

@media (min-width: 992px) and (max-width: 1199px) {
  h2 {
    margin-bottom: 32px;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 24px;
    line-height: 32px;
  }

  /* -------- Landing page ------- */
  .game-section {
    padding: 50px 30px;
  }
  .game-section .item {
    margin: 0 12px 60px;
    width: 260px;
    height: 360px;
  }
  .game-section .item.active {
    width: 400px;
  }
  .game-section .item-desc {
    transform: translateY(calc(100% - 46px));
    -webkit-transform: translateY(calc(100% - 46px));
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  h2 {
    margin-bottom: 32px;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 24px;
    line-height: 32px;
  }
  .line-title {
    width: 330px;
  }

  /* -------- Landing page ------- */
  .game-section {
    padding: 50px 30px 40px;
  }
  .game-section .item {
    margin: 0 12px 60px;
    width: 240px;
    height: 330px;
  }
  .game-section .item.active {
    width: 360px;
  }
  .game-section .item-desc {
    transform: translateY(calc(100% - 42px));
    -webkit-transform: translateY(calc(100% - 42px));
  }
}

@media (max-width: 767px) {
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 19px;
    line-height: 24px;
  }
  .line-title {
    width: 250px;
  }

  /* -------- Landing page ------- */
  .game-section {
    padding: 30px 15px 20px;
  }
  .game-section .item {
    margin: 0 10px 40px;
    width: 200px;
    height: 280px;
  }
  .game-section .item.active {
    width: 270px;
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
  }
  .game-section .item-desc {
    padding: 0 14px 5px;
    transform: translateY(calc(100% - 42px));
    -webkit-transform: translateY(calc(100% - 42px));
  }
}

.card {
  position: relative;
  z-index: 555;
  max-width: 20rem;
  min-height: 20rem;
  width: 90%;
  display: grid;
  place-content: center;
  place-items: center;
  text-align: center;
  position: relative;
  box-shadow: 0.063em 0.75em 1.563em rgb(0 0 0 / 78%);
  border-radius: 2.25rem;
}
</style>