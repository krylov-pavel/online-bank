<template>
  <div v-if="message" :class="['alert', message.type]">
    <p class="alert-title" v-if="title">{{title}}</p>
    <p>{{message.value}}</p>
    <i class="alert-close" @click="close">&times;</i>
  </div>
</template>
<script>
import {useStore} from "vuex"
import {computed} from "vue"

export default {
  setup () {
    const store = useStore()
    const message = computed(() => store.state.message)
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)

    const TITLE_MAP = {
      primary: 'Успешно!',
      danger: 'Ошибка!',
      warning: 'Внимание!'
    }
    return {
      message,
      title,
      close: () => { store.commit('clearMessage') }
    }
  }
}
</script>
