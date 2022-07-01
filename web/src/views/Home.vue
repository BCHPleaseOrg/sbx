<template>
    <main class="bg-white">
        <div class="relative overflow-hidden">

            <section>
                <div class="pt-5 bg-gray-900 sm:pt-8 lg:pt-4 lg:pb-14 lg:overflow-hidden">
                    <div class="mx-auto max-w-7xl lg:px-8">
                        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                <div class="lg:py-24">
                                    <a href="https://gitlab.com/bchplease/sbx" target="_blank" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                                        <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                                            We've started building!
                                        </span>

                                        <span class="ml-4 text-sm">
                                            Visit our Git repo
                                        </span>

                                        <!-- Heroicon name: solid/chevron-right -->
                                        <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <h1 class="mt-4 text-5xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6">
                                        <span class="block text-3xl sm:text-5xl">
                                            A Decentralized Bridge
                                        </span>

                                        <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                                            for SmartBCH
                                        </span>
                                    </h1>

                                    <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                        <strong>Smart Bitcoin Exchange (SBX)</strong> is a distributed Proof-of-Stake (dPOS) network of Smart Bitcoin stakeholders tasked with effectively managing the SmartBCH bridge using a suite of trustless, Free and Open Source Software (FOSS) smart contracts.
                                    </p>

                                    <div class="mt-10">
                                        <form action="javascript://" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                                            <div class="sm:flex text-center">
                                                <div class="">
                                                    <a href="https://flipstarter.sbx.cash"
                                                        class="block w-full py-3 px-6 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-2xl font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                                    >
                                                        Support Our Flipstarter
                                                    </a>
                                                </div>
                                            </div>

                                            <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                                                <strong>Note to Sponsors:</strong>
                                                The <strong>TOP 3 contributors</strong> will each be rewarded with a <strong>3% share</strong> of the 21M $SBX token distribution.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                    <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                                    <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Server />

                <Benefits />

                <Testimonials />

                <Discussions />

                <Team />
            </section>
        </div>
    </main>
</template>

<script>
/* Import components. */
import Discussions from '@/components/Discussions'
// import Header from '@/components/Header'
// import Swap from '@/components/Swap'

export default {
    components: {
        Discussions,
        // Header,
        // Swap,
    }
}
</script>
