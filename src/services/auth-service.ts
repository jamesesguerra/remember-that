import LoginDto from "@/models/login-dto";
import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export async function login(credentials: LoginDto): Promise<void> {
  const res = await axios.post<string>(
    `${API_URL}/accounts/login`,
    credentials,
  );
  const token = res.data;

  localStorage.setItem("token", token);
}
