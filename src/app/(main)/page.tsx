import { About } from '@/widgets/main/about';
import { Header } from '@/widgets/main/header';
import { PreviewProjects } from '@/widgets/main/preview-projects';
import { Skills } from '@/widgets/main/skills';

const Home = () => {
  return (
    <>
      <Header/>

      <main>
        {/* Отдельные секции, а не один блок: соседние разводятся фоном. */}
        <section className="section">
          <div className="container">
            <About/>
          </div>
        </section>

        <section className="section section--surface">
          <div className="container">
            <Skills/>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <PreviewProjects/>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
