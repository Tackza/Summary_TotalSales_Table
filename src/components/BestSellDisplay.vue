<template>
  <div class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">NameGroup</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">Discount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in byReduceSortTotal" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ data.name }}</td>
            <td>{{ data.quantity }}</td>
            <td>{{ data.amount }}</td>
            <td>{{ data.discountPercentEachUnit }} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    byReduceSortTotal() {
      return this.$store.getters["byReduceSortTotal"];
    },
  },
};
</script>

<style>
</style>