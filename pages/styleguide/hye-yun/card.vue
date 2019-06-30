<template>
  <style-guide base-path="/styleguide/hye-yun">
    <template v-slot:content>
      <card></card>
    </template>
  </style-guide>
</template>

<script>
import Template from '~/components/styleguide/Template'
import Card from '~/components/card/hye-yun'

export default {
  components: {
    'style-guide': Template,
    Card
  }
}
</script>

<style lang="scss" scoped></style>
