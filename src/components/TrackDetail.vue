<template lang="pug">
  .container
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image(v-if="track && track.album")
            img(:src="track.album.images[0].url")
          p
            a.button.is-primary.is-large(@click="selectTrack") Seleccionar
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul
                    li(v-for="(v, k) in track")
                      strong {{ k }}: &nbsp;
                      span {{ v }}
              nav.level
                .level-left
                  a.level-item
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
// import trackService from '@/services/track'
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ],

  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  // data () {
  //   return {
  //     track: {}
  //   }
  // },

  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          console.log('Track loaded ...')
        })
    }
    // trackService.getById(id)
    //  .then(res => {
    //    this.track = res
    //  })
  },

  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>
