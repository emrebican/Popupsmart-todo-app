import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (alert: string) => {
  toast.warn(alert, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
