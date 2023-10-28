

<template>
    <div class="hidden md:block">
        <div class="h-screen" style="background-image: url('img/home_header_img.jpg')" >
            <div id="blue-panel" class="absolute bg-blue-900 h-screen border-solid rounded-br-[12rem] w-[44rem]"> </div>
                <div class="flex flex-col w-full" >

                <div class="flex justify-center z-10 ">
                    <div class="w-4/5 py-10">
                        <img src="/img/logo-white.png" class="h-[75px] w-[110px]">
                    </div>
                </div>
                <div class="flex justify-center z-10">
                    <nav class="flex w-4/5 mt-15 justify-between px-20 py-7 font-montserrat font-bold bg-gold">
                        <div class="flex">
                            <NuxtLink to="/">Home</NuxtLink>
                            <NuxtLink to="/services" class="ml-5">Services</NuxtLink>
                            <NuxtLink to="/sample-projects" class="ml-5">Sample Projects</NuxtLink>
                            <NuxtLink to="/contact-us" class="ml-5">Contact Us</NuxtLink>
                        </div>
                        <div class="flex">
                             Visit us on social media 
                            <a class="ml-2" href="https://www.facebook.com/DexForceConsulting" target="blank">
                                <img src="/img/facebook.svg"/>
                            </a>
                            <a class="ml-2" href="https://www.linkedin.com/company/dexforce/" target="blank">
                               <img src="/img/linkedin.svg"/>
                            </a>
                            <a class="pl-3" href="https://www.youtube.com/channel/UCyuUM5HUyRMZXdgGZ04fC3A" target="blank">
                                <img src="/img/youtube.svg"/>
                            </a>
                        </div>
                    </nav>
                </div>
                <div class="flex text-white z-[999] justify-center py-20">
                    <div class="flex w-4/5">
                        <div class="w-5/12">
                            <HeaderCarousel></HeaderCarousel>
                        </div>
                        
                    </div>
                </div>
               
            </div>

        </div>
    </div>

    <div class="md:hidden bg-gold p-4" >
        <div class=" flex items-center justify-between ">
            <button class="outline-none mobile-menu-button" @click="mobileMenuButtonClicked">
                <svg
                    class="w-6 h-6 text-gray-500"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>

            </button>
            <div class="">
                <NuxtLink to="/" class="font-oswald font-normal">
                    <img src="/img/logo-black.png" class="h-[50px] w-[75px]">
                </NuxtLink>
            </div>

            <div class="flex">

                <a class="pl-2" href="https://www.facebook.com/DexForceConsulting" target="blank">
                    <img src="/img/facebook.svg"/>

                </a>
                <a class="pl-2" href="https://www.linkedin.com/company/dexforce/" target="blank">
                    <img src="/img/linkedin.svg"/>
                </a>
                <a class="pl-3" href="https://www.youtube.com/channel/UCyuUM5HUyRMZXdgGZ04fC3A" target="blank">
                    <img src="/img/youtube.svg"/>
                </a>
            </div>
            
        </div>

    </div>

    <div class="flex md:hidden text-white z-[999] justify-center py-10 md:py-20 bg-blue-900">
        <div class="flex w-4/5">
            <div class="w-10/12 md:w-5/12">
                <HeaderCarousel></HeaderCarousel>
            </div>
        </div>
    </div>


    <div class="flex flex-col mobile-menu absolute top-20 bg-gold gap-1 p-4" v-if="isMobileMenuVisible">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/sample-projects">Sample Projects</NuxtLink>
        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
    </div>
</template>


<script setup>

function slideOver(event) {
    document.getElementById('blue-panel').classList.toggle('w-full')
}


var isMobileMenuVisible = ref(false)

function mobileMenuButtonClicked() {
    isMobileMenuVisible.value = !isMobileMenuVisible.value
} 

</script>