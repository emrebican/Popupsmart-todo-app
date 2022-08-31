import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = () =>
  toast.warn("Need to type more than 3 letters!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
