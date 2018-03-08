<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")

    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name }}
      .content
        small {{ track.duration_ms | ms-to-mm }}
        nav.level
          .level-left
            button.button.level-item.is-primary(@click="selectTrack") Marcar
            button.button.level-item.is-warning(@click="goToTrack(track.id)") Ver
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },

  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return }

      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    },

    goToTrack (id) {
      if (!this.track.preview_url) { return }

      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>
