import Vue from "vue";
import Vuex from "vuex";
import { skuData } from "../../_sku";
import { dataTransactions } from "../../_data";
import moment from "moment";

Vue.use(Vuex);

const transactions = dataTransactions.map((transact) => {
  return {
    ...transact,
    sku: skuData.filter((data) => {
      return data.sku === transact.sku;
    })[0],
  };
});

export default new Vuex.Store({
  state: {
    transactions,
    byTransactionFilter: null,
    byTransactionReduce: null,
    byTransactionSortTotal: null,
    byTransactionSortQuantity: null,
  },
  mutations: {
    SORT_BY_DATE(state, filtered) {
      state.byTransactionFilter = filtered;
    },

    TRANSACTION_BY_SKU(state, transactions_filtered) {
      state.byTransactionReduce = transactions_filtered;
    },

    TRANSACTION_BY_SORT_TOTAL(state) {
      const transactions_Array = Object.values(state.byTransactionReduce);
      const transactions_sortTotal = transactions_Array.sort(
        (a, b) => b.items.amount - a.items.amount
      );
      state.byTransactionSortTotal = transactions_sortTotal;
    },

    TRANSACTION_BY_SORT_QUANTITY(state) {
      const transactions_Array = Object.values(state.byTransactionReduce);
      const transactions_sortQuantity = transactions_Array.sort(
        (a, b) => b.items.quantity - a.items.quantity
      );
      state.byTransactionSortQuantity = transactions_sortQuantity;
    },
  },

  actions: {
    sortByDate({ commit }, dateSelect) {
      const transactions_filtered = this.state.transactions.filter((date) => {
        return moment(date.date).isBetween(
          dateSelect.from,
          dateSelect.to,
          undefined,
          "[]"
        );
      });
      commit("SORT_BY_DATE", transactions_filtered);
      return transactions_filtered;
    },

    computedTransactionsBySku({ commit }) {
      const itemDisplay = this.state.byTransactionFilter.reduce((acc, curr) => {
        const initDisplay = {
          date: curr.date,
          items: {
            name: curr.sku.name,
            quantity: 0,
            amount: 0,
            discountPercentEachUnit: 0,
          },
        };

        acc[curr.sku.sku] = acc[curr.sku.sku] || initDisplay;

        const itemQuantity = curr.qty;
        const itemPrice = curr.sku.price;
        const itemDiscountPercentEachUnit = curr.discountPercentEachUnit;
        acc[curr.sku.sku].items.quantity += itemQuantity;
        acc[curr.sku.sku].items.amount += itemPrice * itemQuantity;
        acc[curr.sku.sku].items.discountPercentEachUnit = itemDiscountPercentEachUnit;
        return acc;
      }, {});
      console.log(itemDisplay);
      commit("TRANSACTION_BY_SKU", itemDisplay);
    },

    // "1": {
    //   "2020/10/01": {
    //     name: curr.name,
    //     amount: 50,
    //     quantity: 100,
    //   },
    // },
  },
  getters: {
    byReduce(state) {
      return state.byTransactionReduce;
    },
    byReduceSortTotal(state) {
      return state.byTransactionSortTotal;
    },
    byReduceSortTotalQuantity(state) {
      return state.byTransactionSortQuantity;
    },
  },
});
