import axios from "../../../lib/axios";

export const initializePayStack = async () => (
  axios.post("/billing/paystack/init")
)