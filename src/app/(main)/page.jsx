import { About } from '@/widgets/main/About';
import { Header } from '@/widgets/main/Header';
import { PortfolioPreview } from '@/widgets/main/PortfolioPreview';
import { Skills } from '@/widgets/main/Skills';


const Home = () => {
  return (

    <>
      <Header/>
      <main className="section">
        <div className="container">

          <About/>
          <Skills/>
          <PortfolioPreview/>

        </div>
      </main>
    </>
  );
}

export default Home;
