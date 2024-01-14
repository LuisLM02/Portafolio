// Models
import { SocialNetwork } from "../models/socialNetwork";

// Images
import GitHub from "../assets/images/GitHub.png"
import LinkdenIn from "../assets/images/LinkedIn.png"

export const SOCIAL_NETWORKS: SocialNetwork<ImageMetadata>[] = [
    new SocialNetwork({
        socialNetwork: "GitHub",
        link: "https://github.com/LuisLM02",
        logo: GitHub,
        logoAlt: "GitHub Logo",
    }),
    new SocialNetwork({
        socialNetwork: "LinkedIn",
        link: "https://www.linkedin.com/in/luis-l%C3%B3pez-martell-858a26236/",
        logo: LinkdenIn,
        logoAlt: "Linkden Logo",
    }),
];