import axios from "axios";

const service = (axios as any).create({
    timeout: 8000,
});

service.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (err: any) => {
        return Promise.reject(err);
    }
);

service.interceptors.response.use(
    (data: any) => {
        return Promise.resolve(data.data);
    },
    () => {
        return Promise.reject("服务器错误");
    }
);

export default service;
