<template>
    <Header/>
    
    <div class="flex justify-center mt-10">        
        <div class="md:w-4/5 md:flex">

                <div class="mx-9">
                    <SectionHeading
                        line1="Nonprofit"
                        line2="QuickStart"
                        hideSuperHeading
                        >
                    </SectionHeading>

                    <ul class="pt-5">
                        <li class="leading-5" data-aos="fade-right">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Provide guidance and support for the nonprofit grant process
                        </li>
                        <li class="mt-5" data-aos="fade-left">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Customize fields, page layouts and record types for households, accounts, contacts, leads, opportunities and recurring donations
                        </li>
                        <li  data-aos="fade-down">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Customize the lead process
                        </li>
                        <li data-aos="fade-up">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Setup users, profiles and permissions
                        </li>
                        <li data-aos="flip-left">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Customize donation form
                        </li>
                        <li data-aos="zoom-in">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Setup and configure Experience Cloud
                        </li>
                        <li data-aos="flip-right">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Configure Salesforce Email integration
                        </li>
                        <li data-aos="zoom-in">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Install and configure payment provider plugin
                        </li>
                        <li data-aos="flip-left">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Import donors, volunteers, leads, contacts, accounts, opportunities and recurring donations
                        </li>
                        <li data-aos="fade-right">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>Conduct training sessions
                        </li>
                    </ul>
                </div>
 
                <div class="mx-2 mt-10 md:mt-0 md:ml-20 md:border md:border-solid md:rounded-xl md:border-gray-300 pt-10 pb-0 md:shadow-lg md:shadow ">
                    <div class="mb-8 text-center text-2xl font-bold">
                        Book a FREE call with the Dexforce team.
                    </div>
                    <div id="calendly-widget" 
                        class="calendly-inline-widget"
                        data-auto-load="false"
                        style="min-width:320px;height:630px;">
                    </div>
                </div>
            

        </div>
    </div>
   <Footer/>
</template>
<script setup>
import {  CheckIcon } from '@heroicons/vue/24/outline'
import AOS from 'aos'

onMounted( () => {
    AOS.init()

    Calendly.initInlineWidget({
        parentElement: document.getElementById('calendly-widget'),
        url: 'https://calendly.com/dexforce/discovery-call?hide_event_type_details=1'
    
    })

    
})


</script>



<style>
li {
    @apply mt-5;
}


</style>