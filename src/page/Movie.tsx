import Header from "../component/header/Header";
function Movie() {
  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-[#181818] flex">
        <div className="flex-1 mt-[24px] mr-[24px] ml-[75px]">
          <iframe
            src="https://www.youtube.com/embed/HhIl_XJ-OGA"
            frameBorder="0"
            title="video"
            className="w-full max-h-[700px] h-full"
            allowFullScreen
          ></iframe>
          <div>
            <h3>Tên phim</h3>
            <p>Mô tả</p>
          </div>
        </div>
        <div className="listOffer max-w-[428px] w-full"> Danh sách đề xuất</div>
      </div>
    </div>
  );
}
export default Movie;
