import './../App.css';
import './../costom.css';
import './../media.css';
import Header from './../Header';
import Main from './../Main';
import Carts from './../Carts';
import Footer from './../Footer';
function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <Carts />
      <Footer />
    </div>
  );
}

export default Home;
