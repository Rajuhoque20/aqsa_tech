import axios from "axios";
import Notification from "../components/Notification/Notifcation";
export const ErrorMessage=(error:unknown)=>{
    if (axios.isAxiosError(error)) {
        Notification.error(error.response?.data?.message ?? "Something went wrong!");
    } else {
        Notification.error("Unexpected error occurred!");
    }
}