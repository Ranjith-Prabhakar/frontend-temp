import axios from "../../../api/axiosInstance";
import toast from "react-hot-toast";
import { axiosErrorLog } from "../../../utils/axiosErrorLog";

export async function submitLogin(
  payLoad,
  registrationSucceed,
  navigate,
  setLoading
) {
  try {
    setLoading(true);
    const result = await axios.post("/auth/signup", payLoad);
    setLoading(false);
    if (result.status && result?.status === 201) {
      registrationSucceed();
      toast.success("user registration successful. please login now");
      navigate("/login");
    } else {
      toast.error("Something went wrong. please try again");
    }
  } catch (error) {
    axiosErrorLog(error);
    setLoading(false);
  }
}
