import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Bad Tings, LLC.";
export const siteTitle = "Bad Tings, LLC.";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="icon"
          href="/images/kp-logo-white-solid.png"
          type="image/icon"
        />
        <meta
          name="description"
          content="Bad Tings LLC.'s website using Next.js and Vercel"
        />
        <meta property="og:image" content="/images/nextjs-homepage.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:image" content="/images/nextjs-homepage.png"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
        ></link>
        <link rel="stylesheet" href="/dracula.css"></link>
      </Head>
      <div className="nav">
        <div className="navItems">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li>Bad Tings</li>
            {/* <li>
                Projects
              </li> */}
          </ul>
        </div>
      </div>
      {home ? (
        <>
          <header className={styles.homeHeader}>
            <Image
              priority
              src="/images/geego_peaking.HEIC"
              className={utilStyles.borderCircle}
              height={300}
              width={225}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </header>
        </>
      ) : (
        <>
          <header className={styles.header}>
            <div>
              <h2 className={utilStyles.headingLgInline}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>Home</a>
                </Link>
              </h2>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.navImage}
                    height={60}
                    width={60}
                    alt={name}
                  />
                </a>
              </Link>
            </div>
          </header>
        </>
      )}

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
