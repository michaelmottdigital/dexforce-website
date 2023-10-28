<template>            

    <TransitionGroup name="list" tag="div" id="wrapper1">
        <template v-for="(item, index) in items" :key="item.id" id="wrapper2">
            <HeaderCarouselItem v-if="item.id == visibleItem" 
                    :superHeading="item.superHeading"
                    :line1="item.line1"
                    :line2="item.line2"
                    :buttonText="item.buttonText"
                    :buttonUrl="item.buttonUrl"
                    :message="item.message"
                    >

                </HeaderCarouselItem>
        </template>
    </TransitionGroup>


   
</template>

<script setup>

    const items = [
        { id: "0", 
            superHeading: "We want you to succeed", 
            line1: "On Going", 
            line2: "Salesforce Support",
            buttonText: "Learn More",
            buttonUrl: "/services/on-going-support",
            message: "Dexforce Managed Services is a flexible and economic solution to realize your investment in Salesforce without the need to hire full time employees."
        },
        { id: "1", 
            superHeading: "Helping those who help others", 
            line1: "QuickStart", 
            line2: "for Nonprofits",
            buttonText: "Learn More",
            buttonUrl: "/services/nonprofit-quickstart", 
            message: "A QuickStart package to help you get up and running with Salesforce for Nonprofits."
        }
    ]
    
    var visibleItem = ref(0)

    var interval 

    var showItem = ref(0)

    const timeToWait = 7000

    
    onMounted( () => {
        interval = setInterval( () => {
            visibleItem.value = visibleItem.value == 0 ? 1 : 0

        }, timeToWait)
    })

    onUnmounted( () => {
        clearInterval( interval) 
    })
   

</script>

<style>
.list-enter-active,
.list-leave-active {
    opacity: 0;
    transition: all 0.5s ease;
    transform: translateX(300px);

}
.list-enter-from, 
.list-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}

</style>