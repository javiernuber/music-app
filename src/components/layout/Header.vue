<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            strong App Musica
          .nav-right.nav-menu
            router-link.nav-iten(:to="{ name: 'search'}") Buscar
            router-link.nav-iten(to="about") Nosotros

    .hero-body
      .container.has-text-centered
        h1.title App Music
        h1.subtitle Cancione con Vue
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: { PmPlayer }
}
</script>
