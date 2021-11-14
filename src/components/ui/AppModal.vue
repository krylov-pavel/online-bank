<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3 class="modal-title" v-if="title">{{title}}</h3>

    <slot />
  </div>
</template>
<script>
export default {
  props: ['title'],
  emits: ['close']
}
</script>
