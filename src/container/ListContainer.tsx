import { useEffect, useState } from "react";
import { IData } from "../config/types";
import { getMovies } from "../config/axios";
import ListPresentation from "../presentation/ListPresentation";

function ListContainer() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    handleGetMovie();
  }, []);

  const handleGetMovie = async () => {
    const getFilm = await getMovies();
    setData(getFilm);
  };
  return (
    <>
      <ListPresentation data={data} />
    </>
  );
}
export default ListContainer;
