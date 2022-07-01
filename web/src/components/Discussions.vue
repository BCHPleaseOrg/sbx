<template>
    <main class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div class="relative">
            <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                    Trending
                </h2>

                <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Discussions
                </p>

                <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                    Find out what's New and Noteworthy in the world of Smart Bitcoin.
                    Then join the discussions to share your own bits of wisdom.
                </p>
            </div>

            <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                <a :href="discussion.url"
                    target="_blank"
                    class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    v-for="discussion of discussions"
                    :key="discussion.id"
                >
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" :src="discussion.banner" alt="" />
                    </div>

                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-cyan-600">
                                <span class="">
                                    {{discussion.category}}
                                </span>
                            </p>

                            <div class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">
                                    {{discussion.title}}
                                </p>

                                <p class="mt-3 text-base text-gray-500">
                                    {{discussion.summary}}
                                </p>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <img
                                    class="h-10 w-10 rounded-full"
                                    :src="discussion.avatar"
                                    :alt="discussion.author"
                                />
                            </div>

                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <span class="">
                                        {{discussion.author}}
                                    </span>
                                </p>

                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time datetime="2020-03-16"> {{discussion.publishedAt}} </time>
                                    <span aria-hidden="true"> &middot; </span>
                                    <span> {{discussion.readTime}} read </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
                    </div>

                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-cyan-600">
                                <a href="javascript://" class="hover:underline"> Video </a>
                            </p>

                            <a href="javascript://" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>

                                <p class="mt-3 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo
                                    laudantium.
                                </p>
                            </a>
                        </div>

                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="javascript://">
                                    <img
                                        class="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="Brenna Goyette"
                                    />
                                </a>
                            </div>

                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a href="javascript://" class="hover:underline"> Brenna Goyette </a>
                                </p>

                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time datetime="2020-03-10"> Mar 10, 2020 </time>
                                    <span aria-hidden="true"> &middot; </span>
                                    <span> 4 min read </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
                    </div>

                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-cyan-600">
                                <a href="javascript://" class="hover:underline"> Case Study </a>
                            </p>

                            <a href="javascript://" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">Improve your customer experience</p>
                                <p class="mt-3 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
                                </p>
                            </a>
                        </div>

                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="javascript://">
                                    <img
                                        class="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="Daniela Metz"
                                    />
                                </a>
                            </div>

                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a href="javascript://" class="hover:underline"> Daniela Metz </a>
                                </p>
                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time datetime="2020-02-12"> Feb 12, 2020 </time>
                                    <span aria-hidden="true"> &middot; </span>
                                    <span> 11 min read </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
/* Import components. */
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            discussions: null
        }
    },
    created: function () {
        this.discussions = []

        this.discussions.push({
            id: 'f959d004-2ca4-42a8-9740-ce4615cac3d6',
            category: 'Blog',
            avatar: 'https://i.ibb.co/GQfy8p5/coinflex-logo.jpg',
            banner: 'https://i.ibb.co/RTsV8pX/coinflex.png',
            title: `CoinFLEX Update: June 30, 2022`,
            summary: `Dear CoinFLEX Community, We continue to talk with investors interested in rvUSD and commitments are growing. Once the token sale is fully committed, we will be able to communicate a clear path towards enabling withdrawals, but until then they will remain suspended.`,
            author: `CoinFLEX`,
            url: 'https://coinflex.com/blog/coinflex-update-june-30-2022/',
            publishedAt: 'June 30, 2022',
            readTime: '1 min',
        })
    },
    mounted: function () {
        //
    },
}
</script>
