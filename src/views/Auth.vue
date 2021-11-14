<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email">
      <small>{{eError}}</small>
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="text" id="password" v-model="password">
      <small>{{pError}}</small>
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <div v-if="disableForm">Слишком много попыток входа</div>
  </form>
</template>
<script>
import {useLoginForm} from '@/use/login-form'
import {useStore} from "vuex"
import {useRoute} from "vue-router"
import {errors} from "@/utils/errors"
export default {
  setup () {
    const store = useStore()
    const route = useRoute()

    if (route.query.message) {
      store.commit('setMessage', {
        value: errors(route.query.message),
        type: 'warning'
      })
    }

    return {
      ...useLoginForm()
    }
  }
}
</script>
