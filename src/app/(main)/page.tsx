import { About } from '@/widgets/main/about';
import { Header } from '@/widgets/main/header';
import { PreviewProjects } from '@/widgets/main/preview-projects';
import { Skills } from '@/widgets/main/skills';


const Home = () => {
  return (

    <>
      <Header/>
      <main className="section">
        <div className="container">

          <About/>
          <Skills/>
          <PreviewProjects/>

        </div>
      </main>
    </>
  );
}

export default Home;
