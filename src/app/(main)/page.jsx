import Header from '@components/home/Header';
import About from '@components/home/About';
import Skills from '@components/home/Skills';
import PortfolioPreview from '@components/home/PortfolioPreview';
// import ModalForm from '@/components/ModalForm';


const Home = () => {
  return (

    <>
      <Header />
      <main className="section">
        <div className="container">

          <About />
          <Skills />
          <PortfolioPreview />
          {/* <ModalForm /> */}

        </div>
      </main >
    </>
  );
}

export default Home;
