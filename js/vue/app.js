import { model } from './model.js';
import { controller } from './controller.js';

const app = Vue.createApp({
    data() {
        return model;
    },
    methods: controller,
    mounted() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        })
        this.logger?.verbose (`The initial pick is ${ this.random }.`)
    }
});

export { app }













