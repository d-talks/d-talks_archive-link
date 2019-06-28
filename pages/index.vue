<template>
  <div class="container">
    <div class="layout grid-list wrap">
      <template v-for="i in 20">
        <div :key="i" class="col-3">
          <yh-card></yh-card>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import YhCard from '~/components/card/Yh'

export default {
  components: {
    YhCard
  }
}
</script>

<style lang="css" module scoped></style>
