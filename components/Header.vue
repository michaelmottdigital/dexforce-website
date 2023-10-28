<template>
    <div class="flex justify-center hidden md:flex">
        <nav class="md:flex w-full px-12 py-4 font-montserrat font-bold bg-gold items-center">
            <div class="">
                <NuxtLink to="/" class="font-oswald font-normal">
                    <img src="/img/logo-black.png" class="h-[50px] w-[75px]">
                </NuxtLink>
            </div>
            <div class="flex ml-12">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/services" class="ml-5">Services</NuxtLink>
                <NuxtLink to="/sample-projects" class="ml-5">Sample Projects</NuxtLink>
                <NuxtLink to="/contact-us" class="ml-5">Contact Us</NuxtLink>
            </div>

            <div class="flex ml-auto">
                Visit us on social media 
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
           
        </nav>
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
    <div class="flex bg-blue-900 justify-center py-5">
        <a href="https://npchallenge.dexforceconsulting.com" class="font-bold hover:underline text-white text-lg">
            Sign up for the free 5 day nonprofit challenge
         </a>
       
    </div>

    <div class="flex flex-col mobile-menu absolute bg-gold gap-1 p-4" v-if="isMobileMenuVisible">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/sample-projects">Sample Projects</NuxtLink>
        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
    </div>
    
</template>

<script setup>

var isMobileMenuVisible = ref(false)

function mobileMenuButtonClicked() {
    isMobileMenuVisible.value = !isMobileMenuVisible.value
} 

</script>
