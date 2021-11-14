<template>
  <div class="breadcrumbs">
    <router-link to="/" class="text-white" v-if="back">Вернуться к списку заявок</router-link>
  </div>
  <div class="card">
    <h1 class="card-title" v-if="title">
      {{title}}
      <slot name="header" />
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    back: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
