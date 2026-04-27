import About from '@components/main/home/About';
import Header from '@components/main/home/Header';
import PortfolioPreview from '@components/main/home/PortfolioPreview';
import Skills from '@components/main/home/Skills';
// import ModalForm from '@/components/ModalForm';


const Home = () => {
  return (

    <>
      <Header/>
      <main className="section">
        <div className="container">

          <About/>
          <Skills/>
          <PortfolioPreview/>
          {/* <ModalForm /> */}

        </div>
      </main>
    </>
  );
}

export default Home;
