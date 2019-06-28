<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="layout my-5">
        <div class="col-3">
          <aside-menu></aside-menu>
        </div>
        <div class="col-9">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/include/Navbar'
import AsideMenu from '~/components/include/Aside'

export default {
  components: {
    Navbar,
    AsideMenu
  }
}
</script>

<style lang="scss" module scoped></style>
