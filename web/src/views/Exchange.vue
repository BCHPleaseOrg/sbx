<template>
    <main class="bg-gradient-to-r from-purple-200 to-blue-200">

        <div class="flex flex-col h-screen justify-between sm:max-w-lg sm:mx-auto p-5 bg-gradient-to-r from-gray-800 to-gray-600">

            <header class="flex flex-row items-end justify-end">
                <div class="flex items-center py-1 px-2 bg-gray-300 border-2 border-yellow-500 rounded-xl">
                    <span class="text-xs text-gray-800 font-light">
                        {{id}}
                    </span>
                </div>
            </header>

            <section class="mt-3 p-5 bg-purple-200 shadow border-4 border-yellow-500 rounded-xl">
                <h1 class="text-4xl text-center">
                    place valuable information here
                </h1>

            </section>

            <section class="">
                <div class="mt-3 px-4 py-5 sm:p-6 bg-pink-200 shadow border-4 border-yellow-500 rounded-xl">
                    <div class="sm:flex sm:items-start sm:justify-between">
                        <div>
                            <h3 class="text-lg leading-6 font-medium text-gray-900">Manage subscription</h3>
                            <div class="mt-2 max-w-xl text-sm text-gray-500">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.</p>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                            >
                                {{cta}}
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-1 mr-3">
                    <span class="text-xs text-gray-200">
                        this is a <strong>sponsored</strong> notification
                    </span>
                </div>
            </section>

            <footer class="mt-3 flex justify-center">
                <span class="text-xs text-gray-100">
                    brought to you with ❤️ from <a href="https://apns.io/gov" target="_blank" class="font-medium hover:underline">APNS DAO</a>
                </span>
            </footer>

        </div>

    </main>
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            id: null,
            cta: null,
        }
    },
    methods: {
        //
    },
    created: function () {
        /* Set parameters. */
        const params = this.$route.params
        // console.log('REDIRECT (params):', params)

        /* Set ID. */
        this.id = params.id
        // console.log('REDIRECT (id):', this.id)

        /* Set call to action. */
        this.cta = `Check it out!`
    },
    mounted: function () {
        //
    },
}
</script>
