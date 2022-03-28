import { LoggerFactory, LoggerCategoryCache, ConfigurableLogger } from 'https://cdn.jsdelivr.net/npm/@alt-javascript/logger@2.0.3/dist/alt-javascript-logger-esm.js'

import Application from "../Application.js";
import { app } from '../vue/app.js'
import { controller } from '../vue/controller.js';
import config from '../config/config.js';
import { model } from '../vue/model.js';


let loggerCategoryCache = new LoggerCategoryCache();
let loggerFactory = new LoggerFactory(config,loggerCategoryCache,ConfigurableLogger.DEFAULT_CONFIG_PATH);

export default [
    Application,
    {name:'app', Reference: app },
    {name:'controller', Reference: controller },
    {name:'model', Reference: model },
    {name:'loggerFactory', Reference: loggerFactory },
    {name:'loggerCategoryCache', Reference: loggerCategoryCache },
]
