<template>
  <div class="cv-container">
    <h1>Mon Curriculum Vitae</h1>
    
    <div class="download-section">
      <a href="/CV - CLIO Kendrick.pdf" download="CV - CLIO Kendrick.pdf" class="download-btn">
        Télécharger mon CV (PDF)
      </a>
    </div>

    <div class="cv-viewer reveal">
      <embed 
        src="/CV - CLIO Kendrick.pdf" 
        type="application/pdf" 
        width="100%" 
        height="800px" 
      />
    </div>
    
  </div>
</template>

<style scoped>
.cv-container {
  padding-top: 120px; /* Pour passer sous la Navbar */
  text-align: center;
  color: white;
  min-height: 100vh;
  background-color: #181818;
}

.cv-viewer {
  margin: 40px auto;
  width: 80%;
  max-width: 900px;
  border: 2px solid #6bec68;
  border-radius: 8px;
  overflow: hidden;
}

.download-section {
  margin: 40px 0;
}

.download-btn {
  background-color: #6bec68;
  color: #181818;
  padding: 15px 30px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: transform 0.2s, background-color 0.2s;
}

.download-btn:hover {
  background-color: #58d655;
  transform: scale(1.05);
}
</style>