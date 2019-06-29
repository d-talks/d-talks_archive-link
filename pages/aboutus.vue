<template>
  <div>
    <div class="h3">About US</div>

    <div class="container mt-5">
      <div class="layout grid-list wrap">
        <div class="col-3">
          <ohsung-card></ohsung-card>
        </div>
        <div class="col-3">
          <younhye-card></younhye-card>
        </div>
        <div class="col-3">
          <ui-hong-card></ui-hong-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OhsungCard from '~/components/card/oh-sung'
import YounhyeCard from '~/components/card/youn-hye'
import UiHongCard from '~/components/card/ui-hong'

export default {
  components: {
    OhsungCard,
    YounhyeCard,
    UiHongCard
  }
}
</script>

<style lang="scss" scoped></style>
