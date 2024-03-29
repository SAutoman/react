import Contact from "../../components/user/contact";
import Footer from "../../layouts/user/footer";
import Header from "../../layouts/user/header";

const Home = () => {

    return (
        <div className="w-full">
            <Header/>
            <Contact />
            <Footer/>
        </div>
    )

}

export default Home;