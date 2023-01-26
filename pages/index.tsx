import Head from "next/head";
import styles from "@/styles/Index.module.css";
import Work from "@/components/Work";
import Project from "@/components/Project";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.nav}>
          <a href="#work">WORK</a>
          <a href="#project">PROJECT</a>
          <a href="#about">ABOUT</a>
        </div>

        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroItem}>
            <p>Hey</p>
            <p>I'm SpiderMan</p>
          </div>
          <div className={styles.heroItem}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              vitae cupiditate, aut sint ipsam eaque alias voluptate asperiores
              voluptates consectetur placeat porro inventore veniam doloremque
              possimus adipisci, in dolorum eius odio harum id! Distinctio
              quasi, eaque saepe fugiat perspiciatis iste neque quis in vitae
              architecto? Nesciunt voluptatem
            </p>
          </div>
        </div>

        {/* Download CV */}

        <div className={styles.cv}>
          <a href="#">Download CV</a>
        </div>

        {/* Work */}
        <div className={styles.work} id="work">
          <Work />
        </div>

        {/* Project */}
        <div className={styles.project} id="project">
          <Project />
        </div>

        {/* About */}
        <div className={styles.about} id="about">
          <About />
        </div>
      </main>

      {/* Footer */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
