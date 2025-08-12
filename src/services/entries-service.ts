import { Entry } from "@/models/entry";
import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/entries`;

export async function getEntries(): Promise<Entry[]> {
  const res = await axios.get<Entry[]>(API_URL);
  return res.data;
}

export async function addEntry(entry: Entry): Promise<Entry> {
  const res = await axios.post<Entry>(API_URL, entry);
  return res.data;
}
