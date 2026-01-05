import axios from "../../api/axiosInstance";
import toast from "react-hot-toast";

export async function submitLogin(
  payLoad,
  clearFields,
  navigate,
  setLoading
) {
  try {
    setLoading(true);

    const result = await axios.post("/auth/login", payLoad, {
      withCredentials: true,
    });

    setLoading(false);

    if (result.status === 200) {
      clearFields();
      toast.success("User login successful.");
      navigate("/");
    } else {
      toast.error(result.data.message || "Something went wrong.");
    }
  } catch (error) {
    clearFields()
    setLoading(false);
   toast.error("Something went wrong.");
  }
}
