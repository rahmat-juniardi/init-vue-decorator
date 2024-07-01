<template>
    <v-layout class="bg-background layout-page">
        <v-main>
            <div>
                <router-view class="main-view"/>
            </div>
        </v-main>
    </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class LayoutPage extends Vue {

}
</script>
<style lang="scss">
.layout-page {
    .main-view {
        min-height: 100vh;
    }
}
</style>
