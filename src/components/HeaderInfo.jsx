import Breadcrumb from "react-bootstrap/Breadcrumb";

export const HeaderInfo = () => {
  return (
    <div className="indicator bg-white border-bottom">
      <div className="py-2 container-fluid container-lg">
        <Breadcrumb>
          <Breadcrumb.Item active>Inicio</Breadcrumb.Item>
        </Breadcrumb>
        <div className="d-flex justify-content-between">
          <p className="text-muted my-auto w-50">10 Resultados</p>
          <div className="row align-items-center">
            <label className="text-muted col-12 col-md col-lg-5 text-start text-md-end">Ordernar por:</label>
            <div className="col-12 col-md col-lg-7">
              <select className="form-select form-select-sm" defaultValue={0}>
                <option value="0">Recomendados</option>
                <option value="1">Menor Precio</option>
                <option value="2">Mayor Precio</option>
                <option value="3">A - Z</option>
                <option value="4">Z - A</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
