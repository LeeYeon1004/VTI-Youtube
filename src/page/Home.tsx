import Header from "../component/header/Header";
import Sitebar from "../component/Sitebar/Sitebar";
import { useEffect } from "react";
import ListContainer from "../container/ListContainer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="flex">
        <Sitebar />
        <ListContainer />
      </div>
    </>
  );
}
export default Home;
