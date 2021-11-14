<template>
  <nav class="navbar">
    <h3>Online bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/" exact>Заявки</router-link>
      </li>
      <li>
        <router-link to="/help">Помощь</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="open">Сообщения</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout" exact>Выход</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  setup () {
    const store = useStore()
    const router = useRouter()

    const logout = () => {
      store.commit('auth/logout')
      router.push('/auth')
    }
    const open = () => {
      store.commit('openSidebar')
    }

    return {
      logout,
      open
    }
  }
}
</script>
