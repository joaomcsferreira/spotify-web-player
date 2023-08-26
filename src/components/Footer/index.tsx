import Image from "next/image"

import instagramIcon from "../../../public/svg/instagram.svg"
import twitterIcon from "../../../public/svg/twitter.svg"
import facebookIcon from "../../../public/svg/facebook.svg"
import styles from "./index.css"

const copyrightLinks = [
  "Legal",
  "Privacy Center",
  "Privacy Policy",
  "Cookies",
  "About Ads",
  "Accessibility",
]

const companyLinks = [
  { name: "Company", items: ["About", "Jobs", "For the Record"] },
  {
    name: "Communities",
    items: ["For Artists", "Developers", "Advertising", "Investors", "Vendors"],
  },
  { name: "Useful links", items: ["Support", "Free Mobile App"] },
]

const socialLinks = [
  { name: "instagram", icon: instagramIcon },
  { name: "twitter", icon: twitterIcon },
  { name: "facebook", icon: facebookIcon },
]

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.topLinks}>
        <div className={styles.companyLinks}>
          {companyLinks.map((group) => (
            <div key={group.name} className={styles.companyLink}>
              <h5 className={styles.companyLinkTitle}>{group.name}</h5>
              {group.items.map((link) => (
                <a href="" key={link} className={styles.companyLinkItem}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <div key={link.name} className={styles.socialLinksItem}>
              <Image src={link.icon} alt={`${link.name} icon`} />
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.divisor} />

      <div className={styles.bottomLinks}>
        <div className={styles.copyrightLinks}>
          {copyrightLinks.map((link) => (
            <a key={link} href="" className={styles.copyrightLinksItem}>
              {link}
            </a>
          ))}
        </div>
        <p className={styles.copyrightLinksItem}>&copy; 2023 Spotify AB</p>
      </div>
    </footer>
  )
}

export default Footer
