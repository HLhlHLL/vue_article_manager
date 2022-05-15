<template>
  <div class="my-selector">
    <div
      class="selector"
      :style="{
        color: isSelected ? '#000' : '#bbb'
      }"
      @click="handleSelect"
    >
      {{ text }}
      <i class="iconfont icon-arrow_down" v-if="!upOrDown"></i>
      <i class="iconfont icon-arrow_up" v-else></i>
    </div>
    <ul class="selections" v-show="showSelections">
      <div class="selection-wrap">
        <div class="inner">
          <li class="select-item" v-if="reset" @click="resetSelection">重置</li>
          <li
            class="select-item"
            v-for="item in data"
            :key="item.value"
            :value="item.value"
            @click="handleClick(item)"
          >
            {{ item.label }}
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MySelector',
  emits: ['changeSelection'],
  props: {
    data: {
      type: Array,
      default: () => []
    },
    placeholder: String,
    reset: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSelections: false,
      value: null,
      text: '',
      isSelected: false,
      upOrDown: false
    }
  },
  mounted() {
    this.text = this.placeholder
    document.addEventListener(
      'click',
      (e) => {
        if (e.target.className !== 'selector') {
          this.showSelections = false
          this.upOrDown = false
        }
      },
      false
    )
  },
  methods: {
    handleSelect() {
      this.showSelections = !this.showSelections
      this.upOrDown = !this.upOrDown
    },
    handleClick(item) {
      this.value = item.value
      this.text = item.label
      this.showSelections = false
      this.isSelected = true
      this.$emit('changeSelection', this.value)
    },
    resetSelection() {
      this.value = ''
      this.text = this.placeholder
      this.showSelections = false
      this.isSelected = false
      this.$emit('changeSelection', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-selector {
  position: relative;
  margin: 0 10px;

  .selector {
    position: relative;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;

    .iconfont {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }

  .selector:hover {
    border-color: #bbb;
  }

  .selections {
    position: absolute;
    top: 40px;
    left: -15px;
    width: 150px;
    line-height: 40px;
    text-align: center;

    .selection-wrap {
      padding-top: 10px;
      .inner {
        position: relative;
        padding: 3px 0;
        border: 1px solid #eee;
        border-radius: 5px;
        background-color: #fff;

        .select-item {
          cursor: pointer;
        }

        .select-item:hover {
          background-color: rgb(245, 247, 250);
        }
      }

      .inner::after {
        content: '';
        display: block;
        position: absolute;
        top: -12px;
        left: 68px;
        border: 6px solid transparent;
        border-bottom-color: #eee;
      }

      .inner::before {
        content: '';
        display: block;
        position: absolute;
        top: -11px;
        left: 68px;
        border: 6px solid transparent;
        border-bottom-color: #fff;
        z-index: 2;
      }
    }
  }
}
</style>
