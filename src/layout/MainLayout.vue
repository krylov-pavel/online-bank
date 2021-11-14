<template>
  <the-nav />
  <app-sidebar />
  <div class="container with-nav">
    <app-message></app-message>
    <router-view />
  </div>
</template>
<script>
import TheNav from '@/components/TheNav'
import AppSidebar from "@/components/AppSidebar";
import AppMessage from "@/components/ui/AppMessage"
export default {
  components: {TheNav, AppMessage, AppSidebar}
}
</script>
