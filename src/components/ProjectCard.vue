<script setup>
import { RouterLink } from 'vue-router'
defineProps({project:{type:Object,required:true}})
</script>
<template>
  <article class="project-card">
    <div class="project-cover" :class="`cover-${project.id}`">
      <img v-if="project.cover" :src="project.cover" :alt="`Capa de ${project.name}`" loading="lazy" />
      <span v-else aria-hidden="true" class="monogram">{{project.monogram || project.name.slice(0,2).toUpperCase()}}</span>
      <span class="cover-type">{{project.categories[0]}}</span>
    </div>
    <div class="project-body">
      <div class="project-heading"><h3>{{project.name}}</h3><span class="status">{{project.status || 'Status não informado'}}</span></div>
      <p>{{project.short}}</p>
      <div class="tags"><span v-for="cat in project.categories.slice(0,3)" :key="cat">{{cat}}</span></div>
      <div class="card-actions"><RouterLink class="small-action" :to="`/projeto/${project.slug}`">Conhecer projeto <span aria-hidden="true">↗</span></RouterLink><a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Abrir ${project.name} em nova aba`">Abrir ↗</a></div>
    </div>
  </article>
</template>
