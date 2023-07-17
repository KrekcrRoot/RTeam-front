import {AxiosInstance} from "axios";

export default (instance: AxiosInstance) => {
    return {
        create(name: string, phone: string) {
            return instance.post('/api/forms/create', {
                name: name,
                phone: phone,
            })
        },
    }
}