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

                <p class="mt-5 mx-auto max-w-prose text-sm sm:text-xl text-gray-500">
                    Discover what's New and Noteworthy in the world of SmartBCH.
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
            id: 'ab1a21ad-a6b1-4637-b5da-6c69df89eedc',
            category: 'Read.cash',
            avatar: 'https://i.ibb.co/bFS7Zw0/avatar-595e1cdc9e1096aecc28e793cdd15a72.webp',
            banner: 'https://i.ibb.co/9nYCx6F/smartbch.png',
            title: `The Bailout Plan for smartBCH’s centralized bridge run by CoinFLEX`,
            summary: `Dear smartBCH users: As you have already known, the smartBCH community is in an urgent situation. The centralized bridge maintained by CoinFLEX is stuck now. And the native token on smartBCH, which will be referred to as "sBCH", is not 1:1 anchored to BCH on the main chain.`,
            author: `SmartBCH`,
            url: 'https://read.cash/@SmartBCH/the-bailout-plan-for-smartbchs-centralized-bridge-run-by-coinflex-a560d5dc',
            publishedAt: 'July 1, 2022',
            readTime: '11 min',
        })

        this.discussions.push({
            id: 'fd5ccb7b-368a-4f2a-a02e-8b173e098244',
            category: 'Blog',
            avatar: 'https://i.ibb.co/8Y0JjCH/joystick.jpg',
            banner: 'https://i.ibb.co/CwRYFrj/joystick-banner.jpg',
            title: `Joystick.club expanding to multi-chain`,
            summary: `We are actively monitoring the situation with regards to Coinflex disabling their users withdrawals and the main bridge to and from Smart Bitcoin Cash.`,
            author: `Joystick.club`,
            url: 'https://blog.joystick.club/p/joystickclub-expanding-to-multi-chain?s=09',
            publishedAt: 'June 29, 2022',
            readTime: '5 min',
        })

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
            readTime: '2 min',
        })
    },
    mounted: function () {
        //
    },
}
</script>
