<template>
  <div>
    <h1>About US</h1>

    <ul class="list">
      <li>
        <fifthsage-card></fifthsage-card>
      </li>
      <li>
        <yh-card></yh-card>
      </li>
      <li>
        <uihong-card></uihong-card>
      </li>
    </ul>
  </div>
</template>

<script>
import FifthsageCard from '~/components/card/fifthsage'
import YhCard from '~/components/card/yh'
import UihongCard from '~/components/card/ui-hong'

export default {
  components: {
    FifthsageCard,
    YhCard,
    UihongCard
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
