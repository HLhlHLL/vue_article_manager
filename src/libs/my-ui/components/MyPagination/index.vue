<template>
  <div class="my-pagination">
    <ul>
      <button
        class="number"
        :disabled="currentPage === 1"
        @click="$emit('getCurrentPage', currentPage - 1)"
      >
        上一页
      </button>
      <li v-if="startAndEnd.start > 1" @click="$emit('getCurrentPage', 1)">1</li>
      <li v-if="startAndEnd.start > 2">···</li>

      <template v-for="page in startAndEnd.end">
        <li
          class="number"
          :key="page"
          :style="{
            color: page === currentPage ? '#00a4ff' : ''
          }"
          v-if="page > startAndEnd.end - range"
          @click="$emit('getCurrentPage', page)"
        >
          {{ page }}
        </li>
      </template>

      <li v-if="startAndEnd.end < totalPage - 1">···</li>
      <li
        class="number"
        v-if="startAndEnd.end < totalPage"
        @click="$emit('getCurrentPage', totalPage)"
      >
        {{ totalPage }}
      </li>
      <button
        :disabled="currentPage === totalPage"
        @click="$emit('getCurrentPage', currentPage + 1)"
      >
        下一页
      </button>

      <span class="total">共&nbsp;{{ total }}&nbsp;条记录</span>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyPagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    },
    range: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    startAndEnd() {
      let start = this.currentPage - Math.floor(this.range / 2)
      let end = this.currentPage + Math.floor(this.range / 2)
      if (start < 1) {
        start = 1
        end = this.range
      }
      if (end > this.totalPage) {
        end = this.totalPage
        start = this.totalPage - this.range
      }

      return {
        start,
        end
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-pagination {
  width: 625px;
  margin: 10px;

  button {
    border: none;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #eee;
  }

  span {
    line-height: 40px;
  }
  ul {
    display: flex;

    li {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
    }

    .number:hover {
      background-color: #eee;
    }

    .active {
      color: #00a4ff;
    }
  }

  .total {
    margin-left: 20px;
  }
}
</style>
