const { createApp } = Vue;

    createApp({
        data() {
            return {
                emailArray: [],
                emailQuantity: 10
            }
        },

        methods: {
            generateMail(quantity) {
                for (let index = 1; index <= quantity; index++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then(output => {
                            const email = output.data.response;

                            console.log(email);

                            this.emailArray.push(email);
                        })
                }
                
            }
        },

        mounted() {
            this.generateMail(this.emailQuantity);
            
        }
    }).mount('#app')