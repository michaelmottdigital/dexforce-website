<template>
    <div id="carousel-item">
        <SectionHeading
            :superHeading="props.superHeading"
            :line1="props.line1"
            :line2="props.line2"
            inHomeHeader
            >
        </SectionHeading>
        
        <p class="mt-6 text-lg">
        {{ props.message }}
        </p>

        <NuxtLink :to="props.buttonUrl" 
                    class="w-[11rem] block bg-gold rounded-3xl mt-10 py-3 px-10 text-black
                        text-black font-bold 
                        hover:-translate-y-1 hover:scale-110 duration-300">
                        {{ props.buttonText}}
                    </NuxtLink>
    </div>
</template>

<script setup>

    const props = defineProps ( {
        superHeading: String,
        line1: String,
        line2: String,
        buttonText: String,
        buttonUrl: String,
        message: String
    })

</script>