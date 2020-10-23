<template>
  <div>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <router-link
          to="/group"
          class="nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          <p @click="searchByDate">Group</p>
        </router-link>
        <router-link
          to="/bestsell"
          class="nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          <p @click="searchByDateSortTotal">Best Seller</p></router-link
        >
        <router-link
          to="/quantity"
          class="nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          ><p @click="searchByDateSortQuantity">Quantity</p></router-link
        >
        <router-link
          to="/summary"
          class="nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          ><p @click="searchByDateAllDays">Daily Summary</p></router-link
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    searchByDate() {
      this.$store.dispatch("computedTransactionsBySku");
    },
    searchByDateSortTotal() {
      this.$store.commit("TRANSACTION_BY_SORT_TOTAL");
    },
    searchByDateSortQuantity() {
      this.$store.commit("TRANSACTION_BY_SORT_QUANTITY");
    },
    searchByDateAllDays() {
      const dateSelect = {
        form: "2020/10/01",
        to: "2020/10/31",
      };
      this.$store.dispatch("sortByDate",dateSelect);
      
    },
  },
  computed: {
    byReduce() {
      return this.$store.getters["byReduce"];
    },
    byReduceSortTotal() {
      return this.$store.getters["byReduceSortTotal"];
    },
  },
};
</script>

<style>
</style>