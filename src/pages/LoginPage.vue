<template>
    <div class="login-page d-flex justify-center align-center h-100">
        <v-card width="488" height="668">
            <v-card-text>
                <p class="mb-3" >Init Page Login</p>
                <v-form fast-fail @submit.prevent="doLogin">
                    <p>Alamat email</p>
                    <v-text-field
                        v-model="user.username"
                        name="username"
                        placeholder="Masukan alamat email"
                        autocomplete="on"
                        :hide-details="true"
                    />
                    <p class="text-field-label">Kata sandi</p>
                    <v-text-field
                        v-model="user.password"
                        placeholder="Masukkan kata sandi"
                        :type="passwordVisibility ? 'text' : 'password'"
                        :append-inner-icon="passwordVisibility ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                        @click:append-inner="passwordVisibility = !passwordVisibility"
                    />
                    <v-btn :loading="loading" type="submit" color="primary" elevation="0" height="38" block class="mt-8">Masuk</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";
import axios, {AxiosResponse} from "axios";
import {LoginResponse} from "../interfaces/response.interface.ts";
import Constant from "../configs/Constant.ts";
import ResponseStatusProperties from "../configs/ResponseStatusProperties.ts";

@Component
export default class LoginPage extends Vue {

    user = {
        username: "",
        password: "",
    };

    loading: boolean = false;
    passwordVisibility: boolean = false;

    async doLogin() {
        if (this.loading) return;

        if (!this.user.username || !this.user.password) {
            this.$notify({
                type: "warning",
                title: "Field Kosong",
                text: "Username & Password tidak boleh kosong"
            })
            return
        }

        try {
            // const response = await axios.post<any, AxiosResponse<LoginResponse>>(Constant.LOGIN_API, { ...this.user});
            const response = await axios.get<any, AxiosResponse<LoginResponse>>(Constant.LOGIN_API);
            if (response.data.status === ResponseStatusProperties.LOGIN_SUCCEED) {
                this.$store.commit("setLoginSucceed", response.data.data);
            }
        } catch (e) {
            console.log(e)
        }
        this.loading = false;
    }

}
</script>