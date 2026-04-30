import About from '@components/main/home/About';
import Header from '@components/main/home/Header';
import PortfolioPreview from '@components/main/home/PortfolioPreview';
import Skills from '@components/main/home/Skills';


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
