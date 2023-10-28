<template>
    <Header/>

    <div class="flex justify-center mt-20">
        <div class="w-4/5">

            <div class="md:w-5/12">
                <SectionHeading
                    superHeading="this is the super heading"
                    line1="Our"
                    line2="Services"
                    hideSuperHeading
                    >
                </SectionHeading>
                Our consulting services are designed to provide end-to-end Salesforce support to small and medium sized businesses.
            </div>

            <div class="flex flex-wrap gap-7 mt-20">
                <ServiceCard >
                    <template #title>
                         On Going Support
                    </template>
                    We provide ongoing support to businesses, ensuring that their Salesforce platform is always up-to-date and running smoothly. Our consultants are available to answer questions, troubleshoot issues, and provide training and guidance to your team.
                </ServiceCard>

                <ServiceCard >
                    <template #title>
                        Nonprofit QuickStart
                    </template>
                    We help businesses customize their Salesforce platform to meet their unique requirements. Our consultants will work with your team to ensure that Salesforce is tailored to meet your specific business processes and workflows.
                </ServiceCard>

                <ServiceCard >
                    <template #title>
                        Sales Cloud QuickStart
                    </template>
                    Salesforce Sales Cloud QuickStart is an ideal solution for small and mid-sized businesses looking to quickly implement a powerful and scalable sales platform. With our expert guidance you can get up and running on Sales Cloud in a matter of weeks, rather than months.
                </ServiceCard>

                <ServiceCard >
                    <template #title>
                        Service Cloud QuickStart
                    </template>
                    Salesforce Service Cloud QuickStart is a service designed to help businesses rapidly implement Salesforce's Service Cloud platform. This service provides a streamlined approach to setting up and customizing Sales Cloud, enabling businesses to start using the platform quickly and efficiently.                </ServiceCard>


            </div>
            
            
          
        </div>
        
    </div>

    <Footer/>
</template>

<script setup>



</script>


