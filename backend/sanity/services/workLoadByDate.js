import { client } from "../client";

export async function fetchWorkLoadByDate() {
  const data = await client.fetch(
    `*[_type == "member"] {
      name,
      log[] {
        "memberName": ^.name,
        date,
        entry,
        time
      }
    }
    [].log[] | order(date desc)`
  )
  return data;
}
