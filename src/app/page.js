import Header from '@/components/Header';
import About from '@/components/About';
import Advantages from '@/components/Advantages';
import Services from '@/components/Services';
import ModalForm from '@/components/ModalForm';
import Stage from '@/components/Stage';


const Home = () => {
  return (

    <>
      <Header />
      <main className="section">
        <div className="container">

          <About />
          <Advantages />
          <Services />
          <Stage />

          <ModalForm />

        </div>
      </main >
    </>
  );
}

export default Home;
