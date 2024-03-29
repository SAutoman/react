import Contact from "../../components/user/contact";
import Footer from "../../layouts/user/footer";
import Header from "../../layouts/user/header";

const Home = () => {

    return (
        <div className=" mx-auto ">
            <Header/>
            <Contact />
            <Footer/>
        </div>
    )

}

export default Home;