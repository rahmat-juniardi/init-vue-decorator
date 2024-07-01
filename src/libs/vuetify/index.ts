import 'vuetify/styles'
import { createVuetify } from "vuetify";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Constant from "../../configs/Constant";

export function setupVuetify() {

    return createVuetify({
        components,
        directives,
        icons: {
            aliases,
            sets: { mdi },
            defaultSet: 'mdi',
        },
        theme: {
            themes: {
                light: {
                    colors: {
                        background: Constant.COLOR_BACKGROUND,
                        surface: Constant.COLOR_SURFACE,
                        primary: Constant.COLOR_PRIMARY,
                        secondary: Constant.COLOR_SECONDARY,
                        success: Constant.COLOR_SUCCESS,
                        warning: Constant.COLOR_WARNING,
                        error: Constant.COLOR_ERROR,
                        info: Constant.COLOR_INFO,
                        "on-background": Constant.COLOR_ON_BACKGROUND,
                        "on-surface": Constant.COLOR_ON_SURFACE,
                        "on-primary": Constant.COLOR_ON_PRIMARY,
                        "on-secondary": Constant.COLOR_ON_SECONDARY,
                        "on-success": Constant.COLOR_ON_SUCCESS,
                        "on-warning": Constant.COLOR_ON_WARNING,
                        "on-error": Constant.COLOR_ON_ERROR,
                        "on-info": Constant.COLOR_ON_INFO,
                    }
                },
                dark: {
                    colors: {
                        background: Constant.COLOR_DARK_BACKGROUND,
                        surface: Constant.COLOR_DARK_SURFACE,
                        primary: Constant.COLOR_PRIMARY,
                        secondary: Constant.COLOR_DARK_SECONDARY,
                        success: Constant.COLOR_DARK_SUCCESS,
                        warning: Constant.COLOR_WARNING,
                        error: Constant.COLOR_DARK_ERROR,
                        info: Constant.COLOR_DARK_INFO,
                        "on-background": Constant.COLOR_ON_BACKGROUND,
                        "on-surface": Constant.COLOR_DARK_ON_SURFACE,
                        "on-primary": Constant.COLOR_ON_PRIMARY,
                        "on-secondary": Constant.COLOR_DARK_ON_SECONDARY,
                        "on-success": Constant.COLOR_ON_SUCCESS,
                        "on-warning": Constant.COLOR_ON_WARNING,
                        "on-error": Constant.COLOR_ON_ERROR,
                        "on-info": Constant.COLOR_ON_INFO,
                    }
                }
            }
        }
    });
}
