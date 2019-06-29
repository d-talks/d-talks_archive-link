<template>
  <div class="container">
    <div class="layout grid-list wrap">
      <template v-for="i in 20">
        <div :key="i" class="col-3">
          <younhye-card></younhye-card>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import YounhyeCard from '~/components/card/youn-hye'

export default {
  components: {
    YounhyeCard
  }
}
</script>

<style lang="css" module scoped></style>
