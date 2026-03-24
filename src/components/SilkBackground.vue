<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  speed: { type: Number, default: 5 },
  scale: { type: Number, default: 1 },
  color: { type: String, default: '#7B7481' },
  noiseIntensity: { type: Number, default: 1.5 },
  rotation: { type: Number, default: 0 }
})

const containerRef = ref(null)

let renderer = null
let scene = null
let camera = null
let mesh = null
let material = null
let animationFrame = null
let isMounted = true

// ✅ FIX : définie globalement (accessible dans onBeforeUnmount)
const updateSize = () => {
  if (!containerRef.value || !renderer) return
  const { clientWidth, clientHeight } = containerRef.value
  renderer.setSize(clientWidth, clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

// Fonction utilitaire
const hexToRGB = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return new THREE.Color(r, g, b)
}

// Shaders
const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;
void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd         = noise(gl_FragCoord.xy);
  vec2  uv          = rotateUvs(vUv * uScale, uRotation);
  vec2  tex         = uv * uScale;
  float tOffset     = uSpeed * uTime;
  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);
  float pattern = 0.6 + 0.4 * sin(5.0 * (tex.x + tex.y + cos(3.0 * tex.x + 5.0 * tex.y) + 0.02 * tOffset) +
                  sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));
  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}`

onMounted(() => {
  isMounted = true

  scene = new THREE.Scene()
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })

  containerRef.value.appendChild(renderer.domElement)
  updateSize()

  const geometry = new THREE.PlaneGeometry(2, 2)

  material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: hexToRGB(props.color) },
      uSpeed: { value: props.speed },
      uScale: { value: props.scale },
      uRotation: { value: props.rotation },
      uNoiseIntensity: { value: props.noiseIntensity }
    },
    vertexShader,
    fragmentShader
  })

  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  let lastTime = 0

  const animate = (t) => {
    // ✅ Sécurité : stop si démonté
    if (!isMounted) return

    const delta = (t - lastTime) / 1000
    lastTime = t

    if (material) {
      material.uniforms.uTime.value += 0.1 * delta
    }

    renderer.render(scene, camera)
    animationFrame = requestAnimationFrame(animate)
  }

  animate(0)

  window.addEventListener('resize', updateSize)
})

onBeforeUnmount(() => {
  // ✅ Stop animation immédiatement
  isMounted = false

  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }

  window.removeEventListener('resize', updateSize)

  // ✅ Clean WebGL complet
  if (renderer) {
    renderer.forceContextLoss() // bonus anti leak
    renderer.dispose()

    if (containerRef.value && renderer.domElement) {
      containerRef.value.removeChild(renderer.domElement)
    }
  }

  if (mesh) {
    if (mesh.geometry) mesh.geometry.dispose()
    if (mesh.material) mesh.material.dispose()
  }

  // Reset
  renderer = null
  scene = null
  camera = null
  mesh = null
  material = null
})
</script>

<template>
  <div ref="containerRef" class="silk-bg-container"></div>
</template>

<style scoped>
.silk-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}
</style>