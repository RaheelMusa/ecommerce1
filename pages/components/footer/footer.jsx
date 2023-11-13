import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.copyright}>
            <p>@copyright All right reserved 2023</p>
        </div>
        <div className={styles.socialIcons}>
            <Link href="#" className={styles.Icons}>
                <Image
                src="/facebookIcon.png" alt="" width={20} height={20} className={styles.icon}/>
                <Image
                src="/whatsappIcon.jpg" alt="" width={20} height={20} className={styles.icon}/>
                <Image
                src="/instagramIcon.jpg" alt="" width={20} height={20} className={styles.icon}/>
                <Image
                src="/youtubeIcon.png" alt="" width={20} height={20} className={styles.icon}/>
            </Link>
        </div>

    </div>
  )
}

export default Footer