export interface iAvatar {
    medium: iURL,
    profile: iURL,
    resize_url: string,
    small: iURL
    source_url: string,
    thumb: iURL,
    tiny: iURL,
    url: string
}

interface iURL {
   url: string
}