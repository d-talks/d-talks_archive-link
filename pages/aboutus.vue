<template>
  <div>
    <div class="h3">About US</div>

    <div class="container mt-5">
      <div class="layout grid-list wrap">
        <div class="col-3">
          <ohsung-card></ohsung-card>
        </div>
        <div class="col-3">
          <yh-card></yh-card>
        </div>
        <div class="col-3">
          <hong-ui-card></hong-ui-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OhsungCard from '~/components/card/Ohsung'
import YhCard from '~/components/card/Yh'
import HongUiCard from '~/components/card/HongUi'

export default {
  components: {
    OhsungCard,
    YhCard,
    HongUiCard
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    margin: 0.5rem;
  }
}
</style>
