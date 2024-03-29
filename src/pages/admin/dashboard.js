import Main from "../../layouts/main";
import Nav from "../../layouts/nav";

const DashBoard = ( ) => {

    return (
        <>
            <Nav />
            <Main 
                title={`New Task`}
                subtitle={`Things to do`}
            />
        </>
)

}

export default DashBoard;