<template>
    <div class="flex justify-center bg-blue-900 mt-20 py-20">
        <div class="flex flex-col md:flex-row gap-7  w-4/5 justify-between">
            <div>
                <div class="text-gold font-bold text-xl mt-1">Let's Talk
                </div> 
                <div class="flex flex-col gap-1 mt-4">
                    <div class="flex text-sm items-center">
                        <EnvelopeIcon class="h-4 w-4 text-gold inline"></EnvelopeIcon><span class="ml-3 text-white">support@dexforceconsulting.com</span>
                    </div>
                    <div class="flex text-sm items-center">
                        <PhoneIcon class="h-4 w-4 text-gold inline"></PhoneIcon>
                        <span class="ml-3 text-white">
                            <a @click="scheduleCall">Schedule a Call</a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <NuxtLink to="/terms-and-conditions" class="text-white">Terms and conditions</NuxtLink>
                <NuxtLink to="/privacy-policy" class="text-white">Privacy Policy</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid'

function scheduleCall() {
    Calendly.initPopupWidget({url: 'https://calendly.com/dexforce/discovery-call?hide_event_type_details=1'});
}

</script>

<style scoped>
a {
    text-decoration: underline;
    cursor: pointer;
}
</style>