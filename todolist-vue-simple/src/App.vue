<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="fw-bold">Todo List</h1>
          <todo-list></todo-list>
        </div>
      </div>
    </div>
    <h2>What I Do Today?</h2>

    <div class="homework">
      <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id" class="tasks">
        <ItemTugas v-bind:tugas-saya="ItemTugas" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemTugas from "./components/itemTugas.vue";
export default {
  name: "App",
  data: function () {
    return {
      tugas: [
        {
          id: 1,
          nama: "Menyapu Rumah",
          isDone: false,
        },
        {
          id: 2,
          nama: "Menyapu Kamar",
          isDone: false,
        },
        {
          id: 3,
          nama: "Menyapu Kursi",
          isDone: false,
        },
        {
          id: 4,
          nama: "Menyapu Meja",
          isDone: false,
        },
      ],
    };
  },
  components: { ItemTugas },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.task-title {
  font-size: 1.5em;
  font-weight: bold;
  display: block;
}

.task-description {
  font-size: 1.2em;
  display: block;
}

.homework {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.item {
  font-size: 1.2em;
}

.item-complete {
  text-decoration: line-through;
  color: green;
}
</style>
