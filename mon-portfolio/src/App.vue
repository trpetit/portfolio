<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-indigo-500 selection:text-white">
    
    <header class="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold tracking-tight">
          Tristan <span class="text-indigo-400">Petit</span>
        </h1>
        <nav>
          <ul class="flex space-x-8 text-sm font-medium">
            <li><a href="#about" class="hover:text-indigo-400 transition-colors">Présentation</a></li>
            <li><a href="#projects" class="hover:text-indigo-400 transition-colors">Projets</a></li>
            <li><a href="#contact" class="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <section id="about" class="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[60vh]">
      <div class="max-w-2xl">
        <h2 class="text-indigo-400 font-semibold tracking-wide uppercase mb-3">👋 Bienvenue</h2>
        <p class="text-5xl font-extrabold leading-tight mb-6">
          Je construis des expériences numériques <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">innovantes.</span>
        </p>
        <p class="text-xl text-gray-400 mb-10 leading-relaxed">
          Je suis Tristan Petit, ingénieur logiciel full-stack passionné par l'architecture technique, le code propre et la création de solutions performantes.
        </p>
        <a href="#projects" class="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-transform hover:-translate-y-1 shadow-lg shadow-indigo-500/30">
          Découvrir mon travail
        </a>
      </div>
    </section>

    <section id="projects" class="py-20 bg-gray-800/50">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 flex items-center">
          <span class="bg-indigo-500 w-8 h-1 mr-4 rounded-full"></span> 🚀 Mes Projets
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="(project, index) in projects" 
            :key="index"
            class="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2"
          >
            <div class="h-48 overflow-hidden relative">
              <div class="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                :src="project.img" 
                :alt="project.title" 
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{{ project.title }}</h3>
              <p class="text-gray-400 text-sm mb-6 h-10">{{ project.desc }}</p>
              <a 
                :href="project.pdf" 
                target="_blank" 
                class="inline-block w-full text-center px-4 py-2 bg-gray-700 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
              >
                Voir le rapport technique
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6">Prêt à collaborer ?</h2>
      <p class="text-gray-400 mb-10 text-lg">
        Que ce soit pour discuter d'une nouvelle stack technique, d'un projet de développement ou d'une opportunité, ma boîte de réception est ouverte.
      </p>
      <a 
        href="mailto:tristan.petit.1@etu.u-bordeaux.fr" 
        class="inline-flex items-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-200 font-bold rounded-lg transition-transform hover:-translate-y-1 shadow-xl"
      >
        📩 Me contacter
      </a>
    </section>

    <footer class="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
      <p>© {{ new Date().getFullYear() }} Tristan Petit. Conçu et développé avec Vue.js.</p>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Tes données sont maintenant centralisées, ce qui rend l'ajout de futurs projets (comme des intégrations d'API ou de nouvelles architectures) ultra simple.
const projects = ref([
  { 
    title: 'FILMEO', 
    desc: 'Développement d\'une architecture web full stack.', 
    img: 'img/Filmeo.png', 
    pdf: 'pdf/RetexSaeFilmeo.pdf' 
  },
  { 
    title: 'HYPERSTELLAR', 
    desc: 'Création d\'un jeu de plateau interactif en C#.', 
    img: 'img/CaptureHyperstellarBoard.PNG', 
    pdf: 'pdf/RetexSaeIHM.pdf' 
  },
  { 
    title: 'ODOMO', 
    desc: 'Programmation embarquée d\'une station météorologique.', 
    img: 'img/OdomoChauffage.png', 
    pdf: 'pdf/RetexSaeOdomo.pdf' 
  },
  { 
    title: 'ANALYSITE', 
    desc: 'Plateforme web sécurisée pour la publication de rapports.', 
    img: 'img/SaeWebCapture.PNG', 
    pdf: 'pdf/RetexSaeWeb.pdf' 
  },
  { 
    title: 'RESEAUX', 
    desc: 'Configuration et déploiement d\'un réseau d\'entreprise.', 
    img: 'img/CaptureReseau.PNG', 
    pdf: 'pdf/RetexSaeReseau.pdf' 
  }
])
</script>