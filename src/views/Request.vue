<template>
  <app-loader v-if="loading" />
  <app-page back title="Заявка" v-else-if="request">
    <p><strong>ФИО:</strong> {{request.fio}}</p>
    <p><strong>Телефон:</strong> {{request.phone}}</p>
    <p><strong>Сумма:</strong> {{currency(request.amount)}}</p>
    <p><strong>Статус:</strong> <app-status :type="request.status"/></p>
    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активный</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button class="btn danger" @click="del">Удалить</button>
    <button class="btn" v-if="hasChanges" @click="update">Обновить</button>
  </app-page>
  <h2 v-else class="text-white">Заявки с id {{$route.params.id}} нет.</h2>
</template>

<script>

import AppPage from "../components/ui/AppPage"
import {useRoute, useRouter} from "vue-router"
import {useStore} from "vuex"
import AppLoader from "../components/ui/AppLoader"
import AppStatus from "../components/ui/AppStatus"
import {currency} from "../utils/currency"
import { ref, onMounted, computed } from 'vue'

export default {
  components: {AppStatus, AppLoader, AppPage},
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})
    const status = ref()

    onMounted(async () => {
      request.value = await store.dispatch('request/loadOne', route.params.id)
      loading.value = false
      status.value = request.value?.status
    })

    const del = async () => {
      await store.dispatch('request/delete', route.params.id)
      router.push('/')
    }
    const update = async () => {
      await store.dispatch('request/update', {
        ...request.value,
        status: status.value,
        id: route.params.id
      })
      request.value.status = status.value
    }
    const hasChanges = computed(() => request.value.status !== status.value)


    return {
      request, loading, AppLoader, AppStatus, currency, status, del, update, hasChanges
    }
  }
}
</script>

<style >
strong {
  font-weight: 700;
}

</style>
