
import Breakingnews from "@/components/Breakingnews";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
const MainLayout = ({children}) => {
    // console.log(children)
    return (
        <>
        <Header></Header>
        <Breakingnews></Breakingnews>
       <Navbar></Navbar>
       {children}
        </>
    );
};

export default MainLayout;