<template>
    <router-view />

    <Footer />

    <Bookmark :showBookmark="showBookmark" @close="closeBookmark" />
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
    data: () => {
        return {
            showBookmark: null,
        }
    },
    methods: {
        closeBookmark() {
            this.showBookmark = false
        },

    },
    created: function () {
        /* Show bookmark. */
        // FIXME
        this.showBookmark = true
    },
    mounted: function () {
        //
    },
}
</script>
