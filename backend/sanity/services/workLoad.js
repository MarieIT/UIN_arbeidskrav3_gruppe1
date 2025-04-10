import { client } from "../client";

export async function fetchWorkLoadByMember() {
  const data = await client.fetch(
    `*[_type == "member"] {
      name,
      log[] | order(date desc) {
        date,
        entry,
        time
      }
    }`
  )
  return data;
}