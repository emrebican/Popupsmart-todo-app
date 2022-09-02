import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (alert: string) => {
  toast(alert, {
    position: "top-right",
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
