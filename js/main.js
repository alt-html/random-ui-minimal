
const model = {
    random : '?',
    loaded : es2020,
    active : true
}

const app = Vue.createApp({
    data() {
        return model;
    },
    methods: {
         clicked() {
             fetch('http://localhost:8081')
                .then(response => response.json())
                .then(data => {
                    this.random = data;
                    console.log(data);
                });
        },
    },

    mounted() {
        console.info(`The initial pick is ${this.random }.`)
    }
});

app.mount('#app');








