import { Dict } from "../interfaces/util.interface";

export default class ResponseStatusProperties {
    static SAVE_SUCCEED = "0010";

    static UPDATE_SUCCEED = "0013";

    static DELETE_SUCCEED = "0014";

    static OPERATION_SUCCEED = "1112";

    static LOGIN_SUCCEED = "1101";

    private static statusMapper: Dict = {
        "0000": "Layanan tidak tersedia",
        "0009": "Simpan gagal",
        "0010": "Simpan berhasil",
        "0011": "Data sudah ada",
        "0012": "Update gagal",
        "0013": "Update berhasil",
        "0020": "Update notifikasi berhasi",
        "0014": "Hapus data berhasil",
        "0015": "Hapus data gagal",
        "0016": "Hapus data gagal konstrain ",
        "0017": "Upload gagal",
        "0018": "Upload berhasil",
        "0600": "Kesalahan Sistem",
        "0601": "Koneksi gagal",
        "0602": "Kesalahan Database",
        "0606": "Ilegal Akses",
        "0607": "Tidak ada Akses",
        "0608": "User belum terverifikasi",
        "0021": "Data tidak ditemukan",
        "0022": "Data melebihi batas",
        "0023": "Hapus gagal, masih digunakan",
        "1101": "Login behasil",
        "1102": "Login gagal",
        "1103": "Password atau user tidak terdaftar",
        "1202": "Surat tidak ditemukan",
        "1106": "Password tidak valid",
        "1107": "Token tidak valid",
        "1104": "User sudah ada",
        "1201": "Surat sudah ada",
        "1203": "Username sudah ada",
        "1105": "Session telah berakhir",
        "1108": "Terlalu banyak upaya",
        "1109": "User diblokir",
        "1111": "Input tidak valid",
        "1112": "Operasi berhasil",
        "1113": "Operasi gagal",
        "6000": "Kesalahan pada Video",
    };

    static getStatusMessage(code: string, defaultText?: string) {
        return this.statusMapper[code] || defaultText || "Operasi gagal, mohon coba lagi";
    }
}