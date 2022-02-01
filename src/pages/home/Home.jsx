import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Mainlist from "../../components/mainlists/Mainlist";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
     <Mainlist/>
    </div>
  );
};

export default Home;
