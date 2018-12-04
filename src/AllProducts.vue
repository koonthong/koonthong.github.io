<template>
  <div id="all-products">
    <h2>All Products</h2>
    <div v-for="(product, index) in products" :key="index">
      <span>{{ product.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "AllProducts",
  props: ["products"],
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
