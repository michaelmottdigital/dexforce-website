<template>
    <Header/>
        
    <div class="flex justify-center mt-10">        
        <div class=" md:w-4/5 md:flex">
                <div class="mx-9">
                    <SectionHeading
                        line1="On Going"
                        line2="Support"
                        hideSuperHeading
                        >
                    </SectionHeading>

                    <ul class="pt-5">
                        <li class="leading-5"  data-aos="flip-left">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>
                            Perform day to day salesforce administrative tasks 
                        </li>
                        <li class="mt-5"  data-aos="fade-left">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>
                            Keep Salesforce up to date with changes in how your business operates
                        </li>
                        <li data-aos="flip-left">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>
                            We will provide strategy, advice and guidance  
                        </li>
                        <li data-aos="fade-right">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>
                            Get access to architects, developers and consultants when needed
                        </li>
                        <li data-aos="zoom-in">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>
                            Keep salesforce up to date and optimized  
                        </li>
                        <li data-aos="fade-up">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>
                            Understand how new features can help your business  
                        </li> 
                        <li data-aos="flip-left">
                            <CheckIcon class="h-5 w-5 stroke-[4px] mr-2 text-blue-900 inline"/>
                            Apply best practices for your specific business  
                        </li>

                        
                    </ul>
                </div>

                <div class="mx-2 mt-10 md:mt-0 md:ml-20 pb-0 md:border md:border-solid md:rounded-xl md:border-gray-300 md:shadow-lg md:shadow ">
                    <div class="mb-8 px-3 pt-4 text-center text-2xl font-bold">
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