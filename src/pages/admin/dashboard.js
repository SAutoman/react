import Main from "../../layouts/main";
import Nav from "../../layouts/nav";
import SubNav from "../../layouts/subnav";

const DashBoard = ( ) => {

    return (
        <>
            <Nav />
            <SubNav />
            <Main 
                title={`New Task`}
                subtitle={`Things to do`}
            />
        </>
)

}

export default DashBoard;