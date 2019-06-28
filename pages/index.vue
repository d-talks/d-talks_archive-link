<template>
  <div class="container">
    <div class="layout grid-list wrap">
      <template v-for="i in 20">
        <div :key="i" class="col-3">
          <yunhye-card></yunhye-card>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import YunhyeCard from '~/components/card/Yunhye'

export default {
  components: {
    YunhyeCard
  }
}
</script>

<style lang="css" module scoped></style>
