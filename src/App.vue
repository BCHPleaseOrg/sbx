<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>

    <Footer />
</template>

<script>
/* Import components. */
import Footer from '@/components/Footer2'

export default {
    components: {
        Footer,
    },
}
</script>
