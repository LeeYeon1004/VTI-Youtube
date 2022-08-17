import Header from "../component/header/Header";
import Sitebar from "../component/Sitebar/Sitebar";
import List from "../component/list/List";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="flex">
        <Sitebar />
        <List />
      </div>
    </>
  );
}
export default Home;
