<template>
  <div class="home">
     <tree></tree>	
  </div>
</template>

<script>
// @ is an alias to /src
import tree from '@/components/tree.vue'

export default {
  name: 'home',
  components: {
    tree
  }
}
</script>
