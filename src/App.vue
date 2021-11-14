<template>
  <component :is="layout + '-layout'"></component>
</template>

<script>
import {computed} from "vue"
import MainLayout from '@/layout/MainLayout'
import AuthLayout from '@/layout/AuthLayout'
import {useRoute} from 'vue-router'
export default {
  components: {
    AuthLayout,
    MainLayout
  },
  setup () {
    const route = useRoute()
    console.log(route.meta.layout)
    return {
      layout: computed(() => route.meta.layout)
    }
  }
}
</script>

<style>

</style>
