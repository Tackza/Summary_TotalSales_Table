<template>
  <div class="container">
    <form @submit.prevent="searchByDate">
      <div class="form-group">
        <label for="exampleFormControlInput1">From :</label>
        <input
          type="text"
          class="form-control mb-2"
          placeholder="YYYY/MM/DD"
          v-model="dateFrom"
        />
        <label for="exampleFormControlInput1">To :</label>
        <input
          type="text"
          class="form-control"
          placeholder="YYYY/MM/DD"
          v-model="dateTo"
        />
        <button class="btn btn-success mt-2 submit">Click</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTo: null,
      dateFrom: null,
    };
  },
  methods: {
    searchByDate() {
      const dateSelect = {
        to: this.dateTo,
        from: this.dateFrom,
      };
      this.$store.dispatch("sortByDate" , dateSelect);
    },
  },
};
</script>

<style>
</style>