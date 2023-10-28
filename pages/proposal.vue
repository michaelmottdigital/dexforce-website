<template>
    <div class="flex proposal text-lg " >
        <div class="w-1/5 shadow-[0_50px_20px_-24px_rgb(0,0,0,0.5)] border-r-2 border-gray-100">
            <div class="">
                <img src="/img/logo-black.png" class="h-[60px] w-[85px] mx-auto my-20">
            </div>
            <div class="flex flex-col pl-7 gap-5">
                <div>
                    <a href="#strategy">Executive Summary</a>
                </div>
                <div>
                    <a href="#plan-of-action">Plan of Action</a>
                </div>
                <div>
                    <a href="#your-investment">Your investment</a>
                </div>
                <div>
                    <a href="#next-step">Next Steps</a>
                </div>
                <div>
                    <a href="#terms-and-condition">Terms and Conditions</a>

                </div>

            </div>
        </div>
        
        <div class="w-full">
            <section class="bg-blue-900 text-white text-center" >
                <div class="intro-title">The mission is simple.</div>
                <div class="intro-subtitle">Get you up and running quickly in a 
                    way that sets you up for long term success.
                </div>
            </section>
            <img src="img/proposal/proposal_intro.png"/>
            

            <section id="strategy" class=" flex justify-center">
                <div class="w-4/5">
                    <h2 class="text-center">Executive Summary</h2>
                    <div class="pt-5">
                        <p>
                            <span class="highlight">EBALDC</span> 
                            is a nonprofit that is focused on helping skilled workers in 
                            communities where there are few job opportunities. 
                        </p>
                        <p>
                            After speaking with Doug we identified the following goals,
                            objectives and areas of improvement:
                        </p>
                        <ol>
                            <li>They only accept one time donations but would like to accept monthly donations</li>
                        
                            <li>They would like to better understand the key attributes of their donors</li>
                        </ol>
                        <p>
                            --------------  OR   -----------------------------------------------
                        </p>
                        <p>
                            The World Fund is a newly formed nonprofit focused on servicing
                            the global food crisis. They would like to use Salesforce to 
                            manage their donors, etc....
                        </p>
                        
                    </div>
                </div>
            </section>

            <section id="plan-of-action" class="flex justify-center bg-gold">
                <div class="w-4/5">
                    <h2 class="text-center">Plan of Action</h2>
                    <div class="flex flex-col gap-16">
                        <div class="mt-10">
                            <h4> Discovery </h4>
                            <p>
                                To kick off the project we start with the discovery call. During this
                                call we will dig deeper into how your nonprofit works and who it servers.
                            </p>
                            <p>
                                We will ask questions about:
                                <ol>
                                    <li>Your goals and challenges.</li>
                                    <li>Details you need to know about donors.</li>
                                    <li>How you want to collect donations.</li>
                                    <li>What systems you currently use.</li>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </p>
                            

                        
                        </div>
                        
                        <div>
                            <h4>Salesforce Customization and Configuration</h4>
                            <p>    
                                With all of the information you have given us we
                                can start to customize and configure Salesforce. 
                            </p>
                            <p> 
                                As we do our work we ocassionally reach out to you with more questions
                                and to validate our work. We will do this through
                                demos, phone calls and email. This is also a great way for you to
                                see that we are making progress and are on track.
                            </p>
                            <p>
                                This is an iterative process and we will work with you until
                                we get it right.
                            </p>
                        

                        </div>
                        <div>
                            <h4>User Training</h4>
                            <p>
                                At this point we have completed all of the customization 
                                and configuration work, we have imported your data and you
                                have confirmed that the system is working as expected.
                                Now it's time to train the team.
                            </p>
                            <p>
                                We will train your team on how to use Salesforce to do 
                                their day to day jobs. This training will be via Zoom and usally lasts
                                one to two hours. We can do all of the training at one time
                                or break it up into two sessions. 
                            </p>
                            <p>
                                We will send you a recording of the training so you can use it for reference or
                                for new team members as they come on board.
                            </p>
                        </div>
                        <div>
                            <h4>Go Live!</h4>
                            <p>
                                Congradulations! 
                            </p>
                            <p>
                                You made it. Now you and your team can get to work. 
                            </p>
                            <p>
                                For the next 30 days we will answer any questions you have 
                                and address any concerns. If you require assistance after 
                                that we offer an ongoing monthly service plan. 
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            <section id="your-investment" class="flex justify-center ">
                <div class="w-4/5"> 
                    <h2 class="text-center">Your Investment</h2>
                    <div class="flex flex-col">
                        <div class="mt-10">
                            Our fee is $3000 with $1500 due upfront and the remaining
                            due after we go live.
                        </div>
                    </div>
                </div>
            </section>


            <section id="next-steps" class="flex justify-center bg-amber-900 text-white">
                <div class="w-4/5"> 
                    <h2 class="text-center">Next Steps</h2>
                    <div class="flex flex-col">
                        <div class="mt-10">                        
                            <p>
                                It has been a pleasure meeting you and 
                                to learn about your nonprofit. We would love to help you
                                in your mission. 
                                Simply sign below, make your first payment and we will 
                                schedule the Discovery Call.
                                
                            </p>
                           
                            <p class="pt-20">
                                I, Dave Smith, agree to the terms of this agreement and 
                                I agree that my typed name below can be used as a
                                digital representation of my signature to that fact.
                            </p>
                            <p>
                                Sign by Typing
                            </p>
                            <p>
                                _____________________________
                            </p>
                            <p>
                                <button>Accept</button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            <section>
                Terms and Conditions
            </section>


        </div>
    
    </div>
</template>

<style scoped>

section {
    padding-top: 5rem;
    padding-bottom: 5rem;
}
.intro-title {
    font-size: 3rem;
    font-weight: 700;
}
.intro-subtitle {
    font-size: 2rem;
    padding-top:2rem;
}
p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;

}

ol {
    list-style-type: decimal;
    list-style-position: inside;
}
</style>