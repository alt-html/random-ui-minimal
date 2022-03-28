import { ConfigFactory } from 'https://cdn.jsdelivr.net/npm/@alt-javascript/config@2/dist/alt-javascript-config-esm.js'

export default ConfigFactory.getConfig({
    api : {
        url : 'http://127.0.0.1:8081/'
    },
    logging : {
        level : {
            "/" : "warn",
        }
    },
    "http://127+0+0+1:8080/" : {
        logging : {
            format : "text",
            level : {
                "/" : "verbose",
                "@alt-javascript/cdi" : "verbose",
            }
        },
        api : {
            url : 'http://127.0.0.1:8081/'
        }
    }
})