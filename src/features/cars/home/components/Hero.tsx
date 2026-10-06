import { Link } from "react-router-dom";
import "../../../../styles/home/Hero.css"

const Hero = () => {
  return (
    <section>
      <div>
        <p>Sebas Motors · Costa Rica</p>

        <h1>El auto que mueve sus planes</h1>

        <p>
          Una colección de vehículos para explorar a su ritmo, comparar
          características y elegir su favorito.
        </p>

        <div>
          <Link to="/cars">Explorar autos</Link>

          <Link to="/contact">Hablar con un asesor</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
