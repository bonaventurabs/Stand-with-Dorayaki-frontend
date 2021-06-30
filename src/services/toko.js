import http from "../http-common";

class TokoDataService {
    getAll(page = 0) {
        return http.get(`toko?page=${page}`);
    }

    get(id) {
        return http.get(`/toko/id/${id}`);
    }

    find(query, by = "nama", page = 0) {
        return http.get(`/toko?${by}=${query}&page=${page}`);
    }

    addToko(data) {
        return http.post("/toko/add", data);
    }

    updateToko(id, data) {
        return http.put(`/toko/id/${id}/update`, data);
    }   

    deleteToko(id) {
        return http.delete(`/toko/id/${id}/delete`);
    }

    addStok(data) {
        return http.post("/toko/stok", data);
    }

    updateStok(data) {
        return http.put("/toko/stok", data);
    }

    deleteStok(id) {
        return http.delete(`/stok?id=${id}`);
    }
}

export default new TokoDataService();