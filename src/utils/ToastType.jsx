import React from "react";
import { toast } from "react-toastify";

const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

const ToastType = (type, msg) => {
    switch (type) {
        case "info":
            return toast.info(msg, options);
        case "success":
            return toast.success(msg, options);
        case "warning":
            return toast.warn(msg, options);
        case "error":
            return toast.error(msg, options);

        default:
            return toast.success(msg, options);
    }
};

export default ToastType;
