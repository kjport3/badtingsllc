import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from 'react';
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const handleClick = () => {
    hljs.highlightAll();
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className="icon-container">
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/kjport3"
                target="_blank"
                className="icons"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kenporterfield/"
                target="_blank"
                className="icons"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kenny_yom/"
                target="_blank"
                className="icons"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/kjport3/"
                target="_blank"
                className="icons"
              >
                <CodeIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.goodreads.com/user/show/28192247-kenny-porterfield"
                target="_blank"
                className="icons"
              >
                <ImportContactsIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.strava.com/athletes/4032470"
                target="_blank"
                className="icons"
              >
                <DirectionsRunIcon />
              </a>
            </li>
          </ul>
        </div>
        <p>
          Well hello there! It looks like you've made it to Bad Tings, LLC. We specialize in Bad Tings of course. You may ask, "Well hey there guy, are 'bad tings'?" The answer my seem obvious at first, but it can cover a wide variety of tings. It can be demolition, subversion, deception, acquisition of trust, unwarranted surprise attacks on enemies or friends, as well as many other areas of tings. That's why you need an expert when it comes to bad tings, and you've come to the right place. Bad Tings, LLC. has expertise in all of the aforementioned fields plus additional tings as well. There's really no limit to how many bad tings we can achieve, so you can feel confident that tings will be especially bad when you come to us at Bad Tings, LLC.{" "}
        </p>
      </section>
      <section
        className={`${utilStyles.alignCenter} ${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.slice(0,8).map(({ id, date, title, image }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} onClick={handleClick}>
                <a>
                  <Image
                    priority
                    src={image}
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={title}
                  />
                </a>
              </Link>
              <br />
              <Link href={`/posts/${id}`} onClick={handleClick}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
