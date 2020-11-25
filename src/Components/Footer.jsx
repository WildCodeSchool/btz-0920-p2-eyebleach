import { Badge } from 'reactstrap';

import { useState } from 'react';

import './Footer.css';

function Footer() {
  const [Selected, setSelected] = useState(null);
  return (
    <section className="footer">
      <hr />
      <div className="d-flex justify-content-around">
        <section>
          <a href="/Photos">
            <Badge
              onClick={() => setSelected(!Selected)}
              pill
              color="dark"
              className="opacity-4 m-1 p-2"
            >
              Photos
            </Badge>
          </a>
        </section>
        <section>
          <a href="/Vidéos">
            <Badge
              onClick={() => setSelected(!Selected)}
              pill
              color="dark"
              className="opacity-4 m-1 p-2"
            >
              Vidéos
            </Badge>
          </a>
        </section>
        <section>
          <a href="/Tops">
            <Badge
              onClick={() => setSelected(!Selected)}
              pill
              color="dark"
              className="opacity-4 m-1 p-2"
            >
              Tops
            </Badge>
          </a>
        </section>
      </div>
      <hr />
    </section>
  );
}

export default Footer;
