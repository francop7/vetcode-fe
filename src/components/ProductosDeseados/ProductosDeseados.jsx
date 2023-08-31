import { Link } from "react-router-dom";
import "./ProductosDeseados.css";
import Button from "react-bootstrap/Button";

const ProductosDeseados = () => {
  return (
    <div className="prodDestacados  mt-4">
      <h1 className="tituloProd container col-9 text-center">
        PRODUCTOS DESTACADOS
      </h1>
      <section className="seccionDeProd justify-content-center mt-3 d-flex  ">
        <div className="row w-100 justify-content-around ">

        <article className="productoSolo col-10 col-md-3 col-lg-2 text-center">
          <Link to='*' className="articulosProd">
            <img
              className="w-100"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_704381-MLA50131832314_052022-F.webp"
              alt="imagen de producto1"
              id="prod1"
            />
            <h3 className="nombreDelProd">Alimentos Balanceados</h3>
            <h2 className="precioDelProd">$9.900</h2>
            <h4 className="parrafoDelProd">
              Hasta 6 cuotas sin interes usando tarjeta "La Gaceta"
            </h4>
            <Button className="BotonProd" variant="outline-danger">
              Ver mas...
            </Button>
          </Link>
        </article>

        <article className="productoSolo col-10 col-md-3 col-lg-2 text-center">
          <Link to="*" className="articulosProd">
            <img
              className="w-100"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_768964-MLA70630902317_072023-F.webp"
              alt="imagen de producto1"
              id="prod2"
            />
            <h3 className="nombreDelProd">Jaula para Mascotas</h3>
            <h2 className="precioDelProd">$53.199</h2>
            <h4 className="parrafoDelProd">
              Hasta 6 cuotas sin interes usando tarjeta "La Gaceta"
            </h4>
            <Button className="BotonProd" variant="outline-danger">
              Ver mas...
            </Button>
          </Link>
        </article>

        <article className="productoSolo col-10 col-md-3 col-lg-2 text-center">
          <Link to='*' className="articulosProd">
            <img
              className="w-100"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_951124-MLA54939344652_042023-F.webp"
              alt="imagen de producto1"
              id="prod3"
            />
            <h3 className="nombreDelProd">Collar reforzado 60cm</h3>
            <h2 className="precioDelProd">$3.100</h2>
            <h4 className="parrafoDelProd">
              Hasta 6 cuotas sin interes usando tarjeta "La Gaceta"
            </h4>
            <Button className="BotonProd" variant="outline-danger">
              Ver mas...
            </Button>{" "}
          </Link>
        </article>

        <article className="productoSolo col-10 col-md-3 col-lg-2 text-center">
          <Link to='*' className="articulosProd">
            <img
              className="w-100"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_923445-MLA54989875564_052023-F.webp"
              alt="imagen de producto1"
              id="prod4"
            />
            <h3 className="nombreDelProd">Colchon Dream</h3>
            <h2 className="precioDelProd">$16.200</h2>
            <h4 className="parrafoDelProd">
              Hasta 6 cuotas sin interes usando tarjeta "La Gaceta"
            </h4>
            <Button className="BotonProd" variant="outline-danger">
              Ver mas...
            </Button>
          </Link>
        </article>
        </div>
      </section>
    </div>
  );
};

export default ProductosDeseados;
