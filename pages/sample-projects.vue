<template>
    <Header/>
        <div class="flex justify-center mt-10 ">
            <div class=" w-4/5 bl-blue-100">
                <SectionHeading
                    line1="Sample"
                    line2="Projects"
                    hideSuperHeading
                    >
                </SectionHeading>

                <div class="client-list mt-5 leading-loose flex flex-wrap gap-10  ">
                        <SampleProjectCard data-aos="fade-right">
                            <template #logo>
                                <img src="/img/sample-projects/NWHCT_Logo.png" class="w-[15rem] mx-auto"/>
                            </template>
                            Nonprofit QuickStart
                        </SampleProjectCard>

                        <SampleProjectCard data-aos="flip-right">
                            <template #logo>
                                <img src="/img/sample-projects/Higher_Call_Ministries_logo.png" class="w-[10rem] mx-auto"/>
                            </template>
                            Nonprofit QuickStart
                        </SampleProjectCard>
                        <SampleProjectCard data-aos="fade-down-right">
                            <template #logo>
                                <img src="/img/sample-projects/Talent_Stacker_logo.png" class="w-[15rem] mx-auto"/>
                            </template>
                            Nonprofit QuickStart
                        </SampleProjectCard>
                        <SampleProjectCard data-aos="fade-right">
                            <template #logo>
                                <img src="/img/sample-projects/EBALDC_logo.png" class="w-[15rem] mx-auto"/>
                            </template>
                            Nonprofit QuickStart
                        </SampleProjectCard>

                        <SampleProjectCard data-aos="fade-left">
                            <template #logo>
                                <img src="/img/sample-projects/Corteva_logo.webp" class="w-[8rem] mx-auto"/>
                            </template>
                            Expanded the use of Salesforce to the sales team. Integrated Salesforce with industry seed database and several other internal custom developed systems. 
                        </SampleProjectCard>

                        <SampleProjectCard data-aos="fade-down-right">
                            <template #logo>
                                <img src="/img/sample-projects/BofA_logo.svg" class="w-[18rem] mx-auto"/>
                            </template>
                            Helped integrate Salesforce with a third party encryption technology.
                        </SampleProjectCard>

                        <SampleProjectCard data-aos="flip-up">
                            <template #logo>
                                <img src="/img/sample-projects/TE_logo.svg" class="w-[8rem] mx-auto"/>
                            </template>
                            Migrated 3,000,000 customer inquiries from RightNow to Salesforce.
                        </SampleProjectCard>

                  
                        <SampleProjectCard data-aos="fade-right"> 
                            <template #logo>
                                <img src="/img/sample-projects/STS_logo.png" class="w-[12rem] mx-auto"/>
                            </template>
                            Transition from Marketo to Marketing Cloud. Salesforce data cleanup and de-duplication. 
                            Re-aligned Salesforce with the sales and marketing processes and improved collaboration
                            between teams.
                        </SampleProjectCard>

                        <SampleProjectCard data-aos="zoom-in">
                            <template #logo>
                                <img src="/img/sample-projects/Mastery_Prep_logo.webp" class="mx-auto"/>
                            </template>
                            Initial implementation of Pardot. Integrated a third party printing vendor with Salesforce so sales orders can automatically be sent and then drop-shipped to the customer.
                        </SampleProjectCard>

                        <SampleProjectCard data-aos="zoom-out-up">
                            <template #logo>
                                <img src="/img/sample-projects/Mapware_logo.svg" class="w-[12rem] mx-auto" style="background-color:rgb(44, 61, 80); padding:1rem"/>
                            </template>
                            Service Cloud QuickStart.
                        </SampleProjectCard>

                </div>

    
            </div>
        </div>
    <Footer/>
</template>

<script setup>
import {  CheckCircleIcon } from '@heroicons/vue/24/outline'
import AOS from 'aos'

onMounted( () => {
    AOS.init()
})


</script>

<style>
.client-list > div {
    margin-top: 2em;
}
</style>