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
    "https://alt-html.github.io/random-ui-minimal/" :{
        logging : {
            format : "text",
            level : {
                "/" : "error",
            }
        },
        api : {
            url : 'https://futph74eyi.execute-api.ap-southeast-2.amazonaws.com'
        }
    },
    "http://test-random-ui-minimal+s3-website-ap-southeast-2+amazonaws+com/" :{
        logging : {
            format : "text",
            level : {
                "/" : "verbose",
                "@alt-javascript/cdi" : "verbose",
            }
        },
        api : {
            url : 'https://e26arlcbve.execute-api.ap-southeast-2.amazonaws.com/'
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