<template>
  <div class="my-input-wrap">
    <input
      class="my-input"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @input="handleInput"
      @blur="handleBlur"
    />
    <div class="error-msg">{{ errorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  inject: {
    Rule: {
      default: {}
    }
  },
  emits: ['isValidated'],
  props: {
    type: {
      type: String,
      default: () => 'text'
    },
    placeholder: String,
    value: String,
    autocomplete: {
      type: String,
      default: 'off'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  data() {
    return {
      inputValue: '',
      errorMsg: '',
      validated: false
    }
  },
  methods: {
    handleInput(e) {
      const value = e.target.value.trim()
      this.$emit('inputEvent', value)
    },
    handleBlur(e) {
      if (e) {
        const name = e.target.name
        // 如果没有设置 prop -> name，直接返回
        if (!name) return (this.validated = true)
        let rule = null
        // 如果校验规则为空，则默认必填
        if (this.Rule) {
          rule = this.Rule[name] || [
            { required: true, message: '此项必填！' },
            { minLen: 0, maxLen: 999 }
          ]
        } else {
          rule = [
            { required: true, message: '此项必填！' },
            { minLen: 0, maxLen: 999 }
          ]
        }

        // 每次触发验证都将初始验证结果置为 false
        this.validated = false
        const value = e.target.value
        const valueLen = value.trim().length

        // 当没有自定义校验规则时
        if (!rule[0].validator) {
          if (rule[0].required) {
            if (valueLen === 0) {
              this.errorMsg = rule[0].message
            } else if (rule[1].minLen && valueLen < rule[1].minLen) {
              this.errorMsg = rule[1].message
            } else if (rule[1].maxLen && valueLen > rule[1].maxLen) {
              this.errorMsg = rule[1].message
            } else {
              this.errorMsg = ''
              this.validated = true
            }
          }
        } else {
          // 当使用自定义校验规则时
          rule[0].validator(
            value,
            () => {
              this.errorMsg = ''
              this.validated = true
            },
            (error) => {
              this.errorMsg = error.message
            }
          )
        }

        this.$emit('isValidated', name, this.validated)
      } else {
        this.validated = false
        this.errorMsg = ''
        this.inputValue = ''
        this.$emit('inputEvent', '')
      }
    }
  },
  model: {
    prop: 'value',
    event: 'inputEvent'
  }
}
</script>

<style lang="scss" scoped>
.my-input-wrap {
  width: 80%;

  .my-input {
    border: 1px solid #eee;
    border-radius: 3px;
    width: 100%;
    height: 35px;
    color: #333;
    font-size: 14px;
    padding: 0 15px;
    outline: none;
  }

  .my-input:focus {
    outline: 1px solid rgb(72, 105, 209);
  }

  .error-msg {
    font-size: 12px;
    color: red;
  }
}
</style>
