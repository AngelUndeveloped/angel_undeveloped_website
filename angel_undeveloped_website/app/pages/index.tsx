import Head from 'next/head';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Angel Undeveloped</title>
        <meta name="description" content="Personal Portfolio Website for Angel Yair Mendez Sandoval" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=nippo@200,300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <MobileNav />
      <main>
        <section className="hero container">
          <img className="hero__img" src="/aisha_stealing_my_food.jpg" alt="Profile picture" />
          <ul className="hero__subtitle">
            <li>
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif"
                alt="✨"
                width="32"
                height="32"
              />
            </li>
            <li>
              <h2 className="hero__subtitle">Hello there! I'm Angel!.</h2>
            </li>
            <li>
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif"
                alt="✨"
                width="32"
                height="32"
              />
            </li>
          </ul>
          <h1 className="hero__title">
            <strong>Backend Software Developer</strong> <br /> Architecture Associate <br />{' '}
            <a>Data and AI enthusiast.</a>
          </h1>
          <p className="hero__description">
            I am a software developer (Backend) with an enthusiasm for data and Artificial Intelligence. My personal
            motto is &quot;Strive to Learn.&quot;
          </p>
        </section>
      </main>
    </>
  );
}