import type { Metadata } from 'next';

import { SITE_DESCRIPTION, SITE_TITLE } from '@/shared/config';
import { About } from '@/widgets/main/about';
import { ContactCta } from '@/widgets/main/contact-cta';
import { Header } from '@/widgets/main/header';
import { PreviewProjects } from '@/widgets/main/preview-projects';
import { Skills } from '@/widgets/main/skills';

export const metadata: Metadata = {

  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
};

const Home = () => {
  return (
    <>
      <Header/>

      <main id="main">
        <section className="section" id="projects">
          <div className="container">
            <PreviewProjects/>
          </div>
        </section>

        <section className="section section--surface" id="about">
          <div className="container">
            <About/>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Skills/>
          </div>
        </section>

        <section className="section section--cta" id="contact">
          <div className="container">
            <ContactCta/>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
