<template>
  <style-guide base-path="/styleguide/hye-yun">
    <template v-slot:content>
      <div class="root">
        마윤의 레이아웃
      </div>
    </template>
  </style-guide>
</template>

<script>
import Template from '~/components/styleguide/Template'

export default {
  components: {
    'style-guide': Template
  }
}
</script>

<style lang="scss" scoped></style>
