import { App, ComponentPublicInstance, createApp } from 'vue';
import VueRouter from 'vue-router';
import Notifications, { NotificationsOptions } from '@kyvg/vue3-notification';

import VueApp from './App.vue';
import router from './router';
import stores from './stores';

import { formatDate } from "./utils";
import { setupVuetify } from './libs/vuetify'
import { setupInterceptor } from "./libs/axios/interceptor";

export default class AppConfig {
    private router: VueRouter.Router;
    private app: App;
    private appInstance?: VueApp | ComponentPublicInstance;

    static instance: AppConfig;
    static getInstance() {
        if (!this.instance) this.instance = new AppConfig();
        return this.instance;
    }

    constructor() {
        this.app = createApp(VueApp);
        this.router = router;
        this.useLibs();
        this.setFilters();
        this.setGlobalComponents();
        this.setDisableWarn();
    }

    useLibs() {
        this.app.use(this.router);
        this.app.use(stores);
        this.app.use(Notifications);
        this.app.use(setupVuetify());

        setupInterceptor();
    }

    notify({ title = "Info", type = "info", text, duration }: NotificationsOptions) {
        (this.appInstance as VueApp)?.notify(title, text, type, duration);
    }

    // in case its noisy
    setDisableWarn() {
        this.app.config.warnHandler = () => { };
    }

    setFilters() {
        this.app.config.globalProperties.$filters = { formatDate };
    }

    mount(element: string) {
        this.appInstance = this.app.mount(element);
    }

    setGlobalComponents() {
    }
}