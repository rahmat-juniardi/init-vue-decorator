import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import AppConfig from "../../AppConfig";
import { ResponseStatus } from "../../interfaces/response.interface";
import Constant from "../../configs/Constant";
import store from "../../stores/index";
import ResponseStatusProperties from "../../configs/ResponseStatusProperties";

export function setupInterceptor() {
    axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        const token = store.getters.token;
        if (token) {
            config.headers = Object.assign({ 'Authorization': token }, config.headers);
        }

        if (config.data && config.data instanceof FormData) {
            config.headers = Object.assign({ "Content-Type": "multipart/form-data" }, config.headers);
        } else {
            config.headers = Object.assign({ "Content-Type": "application/json" }, config.headers);
        }

        return {
            ...config,
            baseURL: Constant.BASE_API,
            timeout: Constant.MAX_TIMEOUT,
        };
    }, (error: AxiosError) => Promise.reject(error));

    axios.interceptors.response.use((response: AxiosResponse) => {
        if (response.config.method?.toUpperCase() !== 'GET') {
            const notifParam = getNotifParam(response)
            if (notifParam) AppConfig.getInstance().notify(notifParam)
        }

        return response
    }, (error: AxiosError) => {
        if (!error.response) {
            return Promise.reject(error);
        }

        const notifParam = getNotifParam(error.response as AxiosResponse<ResponseStatus>);
        if (notifParam) AppConfig.getInstance().notify({ ...notifParam, type: "error" });

        if (error?.response?.status === 401) {
            store.commit('setLoggedOut');
            store.commit('setResetClientLetters');
            return Promise.reject(error);
        }

        return Promise.reject(error);
    });
}


function getNotifParam(resp: AxiosResponse<ResponseStatus>) {
    let type: string;
    let text: string;

    if (resp.data.status == "1112" || resp.data.status == "1101" || resp.data.status == "0018") {
        type = "info";
        text = ResponseStatusProperties.getStatusMessage(resp.data.status);
    } else {
        type = "error";
        text = resp.data.description ? resp.data.description?.message : ResponseStatusProperties.getStatusMessage(resp.data.status);
    }

    return {
        type: type,
        title: "Info",
        text: text,
    }
}