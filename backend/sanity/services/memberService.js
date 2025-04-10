import { client } from "../client";

export async function fetchProfileCardInfo(){
    const data = await client.fetch(
        `*[_type == 'member']|order(name asc){
            "image": frontpageimage.asset -> url,
            name,
            email
        }`
    )
    return data
}

export async function fetchProfilePageInfo(member) {
    const data = await client.fetch(
        `*[_type == 'member' && name == ${member}]{
            "image": profilecardimage.asset -> url,
            name,
            bio,
            interests
        }`
    )
}