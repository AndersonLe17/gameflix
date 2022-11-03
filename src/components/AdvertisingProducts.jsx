import { useNavigate } from "react-router-dom";

export const AdvertisingProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="mb-3">
        <img src={require(`../img/BannerProducts.png`)} className="img-fluid rounded banner-section" alt="Banner" onClick={() => navigate("/category/all")}/>
      </div>
      <div className="row gy-3">
        <div className="col-6 col-sm-4 col-lg-3">
          <img src={require(`../img/Consolas.png`)} className="img-fluid rounded h-100 banner-section" alt="Consolas" onClick={() => navigate("/category/consolas")}/>
        </div>
        <div className="col-sm-8 order-1 order-sm-0 col-lg-6">
          <img src={require(`../img/Juegos.png`)} className="img-fluid rounded banner-section" alt="Juegos" onClick={() => navigate("/category/juegos")}/>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <img src={require(`../img/Perifericos.png`)} className="img-fluid rounded h-100 banner-section" alt="Perifericos" onClick={() => navigate("/category/perifericos")}/>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <img src={require(`../img/SillasGamer.png`)} className="img-fluid rounded h-100 banner-section" alt="SillasGamer" onClick={() => navigate("/category/sillas gamer")}/>
        </div>
        <div className="col-sm-12 order-1 order-lg-0 col-lg-6">
          <img src={require(`../img/Funkos.png`)} className="img-fluid rounded banner-section" alt="Funkos"/>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <img src={require(`../img/Audio.png`)} className="img-fluid rounded h-100 banner-section" alt="Audio" onClick={() => navigate("/category/audio")}/>
        </div>
      </div>
    </div>
  );
};
