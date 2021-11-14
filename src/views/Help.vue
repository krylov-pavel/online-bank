<template>
  <app-page title="Помощь" >
    <question v-for="q in questions" :key="q.title" :question="q"></question>
  </app-page>
</template>

<script>
import AppPage from "../components/ui/AppPage";
import {ref} from 'vue'
import Question from "../components/question/Question";
export default {
  components: {Question, AppPage},
  setup () {
    const questions = [
      {title: 'Что есть в данной системе?', text: 'Тут есть все, для того, чтобы смотреть какие есть заявки и изменять их статус.'},
      {title: 'Как тут работает авторизация?', text: 'Все реализовано через firebase.'},
    ]
    return {
      questions, Question
    }
  }
}
</script>

<style scoped>

</style>
