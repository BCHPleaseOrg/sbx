<template>
    <main class="">

        <section class="relative bg-gray-800 overflow-hidden">
            <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
                <svg class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none">
                    <defs>
                        <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
                </svg>
            </div>

            <div class="relative pt-6 pb-16 sm:pb-24">
                <Header />

                <main class="mt-16 sm:mt-24">
                    <div class="mx-auto max-w-7xl">
                        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                <div>
                                    <a href="javascript://" class="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                                        <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                                            ONLINE
                                        </span>

                                        <span class="ml-4 text-sm">$513.37 in transactions</span>

                                        <!-- Heroicon name: solid/chevron-right -->
                                        <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                                        <span class="md:block">Data to enrich your</span>
                                        <span class="text-indigo-400 md:block">online business</span>
                                    </h1>
                                    <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                                    </p>
                                    <p class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Used by</p>
                                    <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                                        <div class="flex flex-wrap items-start justify-between">
                                            <div class="flex justify-center px-1">
                                                <img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                                            </div>
                                            <div class="flex justify-center px-1">
                                                <img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
                                            </div>
                                            <div class="flex justify-center px-1">
                                                <img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Swap />
                        </div>
                    </div>
                </main>
            </div>
        </section>

    </main>
</template>

<script>
/* Import components. */
// import CallToAction from '@/components/CallToAction'
import Header from '@/components/Header'
import Swap from '@/components/Swap'

export default {
    components: {
        // CallToAction,
        Header,
        Swap,
    }
}
</script>
