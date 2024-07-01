export default class Constant {
    // FORMAT DATE
    static PREVIEW_FORMAT_DATE = 'D MMMM YYYY';
    static PREVIEW_FORMAT_DATE_FULL = 'D MMMM YYYY HH:mm';
    static PARSE_FORMAT_DATE = 'DD/MM/YYYY';

    // COLOR
    static COLOR_BACKGROUND = "#F8F8F8";
    static COLOR_SURFACE = "#FFFFFF";
    static COLOR_PRIMARY = "#0052CC";
    static COLOR_SECONDARY = "#2F3349";
    static COLOR_SUCCESS = "#388e3c";
    static COLOR_WARNING = "#FFB55A";
    static COLOR_ERROR = "#FF2F2F";
    static COLOR_INFO = "#1877F2";
    static COLOR_ON_BACKGROUND = "#5E656A";
    static COLOR_ON_SURFACE = "#313639";
    static COLOR_ON_PRIMARY = "#FFFFFF";
    static COLOR_ON_SECONDARY = "#4A4E57";
    static COLOR_ON_SUCCESS = "#FFFFFF";
    static COLOR_ON_WARNING = "#2F3349";
    static COLOR_ON_ERROR = "#FFFFFF";
    static COLOR_ON_INFO = "#FFFFFF";

    // DARK COLOR
    static COLOR_DARK_BACKGROUND = "#25293C";
    static COLOR_DARK_SURFACE = "#2F3349";
    static COLOR_DARK_SECONDARY = "#424659";
    static COLOR_DARK_SUCCESS = "#66BB6A";
    static COLOR_DARK_ERROR = "#FF776D";
    static COLOR_DARK_INFO = "#4b99ff";
    static COLOR_DARK_ON_SURFACE = "#A6B1B9";
    static COLOR_DARK_ON_SECONDARY = "#A6B1B9";

    // PAGING
    static DEFAULT_LIMIT = 10;
    static MAX_LIMIT = 100;
    static MAX_TIMEOUT = 40 * 1000;

    // CONFIG LOCAL STORAGE
    static USER_KEY_LS = "user";

    // API
    static BASE_API = import.meta.env.VITE_BASE_API;
    static LOGIN_API = this.BASE_API + 'do-login';
}