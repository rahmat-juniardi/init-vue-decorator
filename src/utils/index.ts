import dayjs from "dayjs";
import Constant from "../configs/Constant.ts";
import 'dayjs/locale/id'

export const formatDate = (
    value?: Date | string | number,
    pattern: string = Constant.PREVIEW_FORMAT_DATE,
    parsePattern: string = Constant.PARSE_FORMAT_DATE,
    localTime: string = 'id'
) => {
    if (!value) return "-";

    if (typeof value === "string") return dayjs(value, parsePattern).locale(localTime).format(pattern) || "-";

    if (typeof value === "number") return dayjs(new Date(value)).locale(localTime).format(pattern) || "-";

    return dayjs(value).format(pattern) || "-";
}