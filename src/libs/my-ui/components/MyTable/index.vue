<template>
  <div
    class="my-table"
    :style="{
      'text-align': center ? 'center' : ''
    }"
  >
    <div class="table-container">
      <table>
        <thead>
          <tr class="head-wrap">
            <th
              :style="{
                flex: width[index] || 1
              }"
              v-for="(th, index) in thead"
              :key="index"
            >
              {{ th }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="body-wrap" v-for="row in data" :key="row.id">
            <td
              :style="{
                flex: width[index] || 1
              }"
              v-for="(p, index) in prop"
              :key="index"
            >
              <span v-if="p !== 'custom'">{{ row[p] }}</span>
              <slot v-else name="custom" :scope="row"></slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    center: {
      type: Boolean,
      default: false
    },
    thead: {
      type: Array,
      default: () => []
    },
    prop: {
      type: Array,
      default: () => []
    },
    width: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.my-table {
  .table-container {
    display: flex;

    table {
      width: 100%;
      margin-top: 10px;
      border: 1px solid #eee;
      border-collapse: collapse;

      tr {
        display: flex;
      }

      th,
      td {
        border: 1px solid #eee;
      }

      .body-wrap:hover {
        background-color: rgb(245, 247, 250);
      }
    }
  }
}
</style>
