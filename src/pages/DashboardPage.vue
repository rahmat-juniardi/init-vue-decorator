<template>
    <div class="dashboard-page d-flex justify-center align-center">
        <p>Dashboard Page</p>
        <v-btn @click="$store.commit('setLoggedOut')">
            Logout
        </v-btn>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";

@Component
export  default class DashboardPage extends Vue {

}
</script>