<template>
  <div>
    <button type="button" class="btn btn-primary btn-sm">Amount</button>
    <button type="button" class="btn btn-secondary btn-sm">Quantity</button>
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
              <th scope="col" v-for="(day, index) in daysInMonth" :key="index">
                {{ day }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dayInMonth() {
      const days = [];
      for (let i = 1; i <= 31; i++) {
        days.push(Number(i));
      }
      console.log(days);
      return days;
    },
  },
};
</script>

<style>
</style>