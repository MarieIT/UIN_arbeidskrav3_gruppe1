import { client } from "../client";

export async function fetchProfileCardInfo(){
    const data = await client.fetch(
        `*[_type == 'member']{
            "image": frontpageimage.asset -> url,
            name,
            email
        }`
    )
    return data
}