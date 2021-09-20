<template>
    <router-view />

    <Footer />

    <Bookmark />
</template>

<script>
/* Import components. */
import Bookmark from '@/components/Bookmark'
import Footer from '@/components/Footer2'

export default {
    components: {
        Bookmark,
        Footer,
    },
}
</script>
