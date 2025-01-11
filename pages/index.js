import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Header from 'components\Header';
// import Navbar from 'components\Navbar';
// import Footer from 'components\Footer';



export default function Home() {
  return(
    <div>

        <Header />
        <Navbar />
        <Footer />

        <main>

          <h1> 
            Welcome!
          </h1>

          <p> 
            This is the homepage of my application for my App Dev subject
          </p>

        </main>

    </div>
  );  
}
