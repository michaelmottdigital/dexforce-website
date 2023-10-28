<template>
    <div class="flex items-center">
        <hr class="w-12 border-gold border-1 mr-3" v-show="hideSuperHeading == false"/>
        <span class="text-lg" v-show="hideSuperHeading == false">
            {{ superHeading }}
        </span>
    </div>
    <h2>
        <div class="text-gold mt-2">{{ line1 }}</div>
        <div class="mt-2" 
            :class="[ inHomeHeader ? 'text-white' : 'text-blue-900' ]" 
        >
            {{ line2 }}
        </div>
    </h2>
</template>

<script setup>

const props = defineProps({
    superHeading: String,
    line1: String,
    line2: String,
    inHomeHeader: {type: Boolean, default: false},
    hideSuperHeading: {type: Boolean, default: false}
})



</script>