export default class Application {

    static qualifier = '@alt-javascript/random-ui-minimal/Application';

    constructor( options ) {
        this.logger = options?.logger || null;
        this.app = options?.app || options || 'autowired';
    }

    async run () {
        this.logger?.verbose('Running application: mounting Vue app to <div> with id #app.');
        this.app.mount("#app");
    }
}