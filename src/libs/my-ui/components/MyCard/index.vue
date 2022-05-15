<template>
  <div class="my-card">
    <div class="title-wrap">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCard'
}
</script>

<style lang="scss" scoped>
.my-card {
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  .title-wrap {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
}
</style>
