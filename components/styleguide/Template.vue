<template>
  <div class="">
    <ul class="list horizontal">
      <li class="list__item">
        <a :href="`${basePath}`">layout</a>
      </li>
      <li class="list__item">
        <a :href="`${basePath}/card`">card</a>
      </li>
    </ul>
    <div class="">
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    basePath: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module scoped></style>
