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
            <td>{{ data.items.name }}</td>
            <td>{{ data.items.quantity }}</td>
            <td>{{ data.items.amount }}</td>
            <td>{{ data.items.discountPercentEachUnit }} %</td>
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