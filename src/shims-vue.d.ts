declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $filters: any
        $store: Store<State>
        $emit: any
        // $notify: any
    }
    // ComponentPublicInstance: any
}

/* eslint-disable */
declare module '*.vue' {
    import type { Component } from 'vue'
    const component: Component<{}, {}, any>
    export default component
}

export { }

declare module '*.vue';

