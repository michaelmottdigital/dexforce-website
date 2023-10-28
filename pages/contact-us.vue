<template>
    <Header/>
    <div class="flex justify-center">
        <div class="w-4/5 border-solid">
            
            <div class="flex-col">
                <div class="text-center text-2xl p-10" v-if="!formSubmitSuccess">How can we help?</div>

                <div>
                    <form @submit.prevent="onSubmit" class="flex flex-col gap-4 m-auto md:w-1/2" v-if="!formSubmitSuccess">
                        <div class="flex flex-col gap-1">
                            <label for="full-name" class="">Name</label>
                            <input
                                type="text"
                                name="full-name"
                                v-model="formData.name"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="company">Company</label>
                            <input
                                type="text"
                                name="company"
                                v-model="formData.company"
                                placeholder="Enter your company name"
                                
                            />
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                v-model="formData.email"
                                placeholder="Enter your email"
                                
                            />
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                v-model="formData.phone"
                                placeholder="Enter your phone #"
                                v-maska data-maska="(###) ###-####" data-maska-eager
                                
                            />
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="job-title">Job Title</label>
                            <input
                                type="text"
                                name="job-title"
                                v-model="formData.jobTitle"
                                placeholder="Enter your title"
                                
                            />
                        </div>

                        <div class="flex flex-col gap-1">
                            <label for="message">How can we help you?</label>
                            <textarea
                                textarea
                                rows="5"
                                name="message"
                                v-model="formData.message"
                                placeholder="Send us a message"
                                
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Send"
                                class="border-1 bg-blue-900 p-5 text-white rounded-lg font-bold "
                            />
                        </div>

                    </form>

                    <div v-if="formSubmitSuccess" class="text-center m-[10rem] ">
                        <h3>Thank you for submitting your request. We'll get back to you shortly.</h3>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <Footer/>
</template>

<script setup>
import { ref } from 'vue'

let formSubmitSuccess = ref(false)

const formData = ref({
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    company: '',
    message: ''
})


async function onSubmit() {
    try {
        const result =  await $fetch('api/forms', {
            headers: {
                    "Content-Type": "multipart/form-data",
                },
            method: 'POST',
            body: formData.value
        })

        console.log(result)

    } catch(e) {
        console.error(e)
    }
    formSubmitSuccess.value = true

}

</script>