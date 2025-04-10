import { client } from "../client";

export async function fetchWorkLoadByMember() {
  const data = await client.fetch(
    `*[_type == "member"] {
      log[] {
        date,
        entry,
        time
      }
    }`
  )
  return data;
}