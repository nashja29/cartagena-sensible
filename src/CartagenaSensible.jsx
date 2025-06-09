import MapaAmbiental from './MapaAmbiental'

export default function CartagenaSensible() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <section style={{ padding: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Cartagena Sensible</h1>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
          Conectando tecnología y comunidad para proteger el agua y los espacios públicos
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button onClick={() => scrollTo('mapa')} style={{ marginRight: '1rem', padding: '1rem', backgroundColor: '#0070f3', color: '#fff', borderRadius: '0.5rem' }}>
            Explora el mapa
          </button>
          <button onClick={() => scrollTo('unete')} style={{ padding: '1rem', backgroundColor: '#10b981', color: '#fff', borderRadius: '0.5rem' }}>
            Conviértete en sensor humano
          </button>
        </div>
      </section>

      <section id="por-que" style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem' }}>¿Por qué Cartagena?</h2>
        <p>
          Cartagena enfrenta una crisis silenciosa: sus cuerpos de agua están siendo olvidados y maltratados.
          Desde la <strong>Bahía de Cartagena</strong>, hasta la <strong>Ciénaga de las Quintas</strong>, pasando por los caños que atraviesan sectores como <strong>Olaya Herrera</strong> y <strong>El Pozón</strong>,
          el agua sufre y con ella, la ciudad.
        </p>
        <p>
          <strong>La Ciénaga de la Virgen</strong>, <strong>el Caño Juan Angola</strong> y <strong>Las Ánimas</strong> son algunos de los puntos críticos donde la contaminación, los residuos
          y la falta de mantenimiento se agravan, especialmente en época de lluvias.
        </p>
        <p>
          Estos espacios no solo son vitales para el ecosistema, también lo son para la salud, la dignidad y el futuro de las comunidades que los rodean.
        </p>
      </section>

      <section id="tecnologia" style={{ padding: '2rem', backgroundColor: '#f9fafb' }}>
        <h2 style={{ fontSize: '1.8rem' }}>Tecnología ciudadana</h2>
        <p>Con sensores urbanos, dispositivos de bajo costo y participación humana, la ciudad puede transformarse en un ente sensible que responde y se adapta.</p>
      </section>

      <section id="mapa" style={{ padding: '2rem', backgroundColor: '#f0f4f8' }}>
        <h2 style={{ fontSize: '1.8rem' }}>Mapa ambiental vivo</h2>
        <p>Explora los puntos críticos ambientales en Cartagena.</p>
        <div style={{ height: '400px', marginTop: '1rem' }}>
          <MapaAmbiental />
        </div>
      </section>

      <section id="unete" style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem' }}>Únete</h2>
        <p>
          No necesitas ser ingeniero para cuidar el agua. Solo necesitas querer hacerlo.
          Súmate como voluntario, promotor comunitario o aliado técnico.
        </p>
        <button style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#8b5cf6', color: '#fff', borderRadius: '0.5rem' }}>
          Quiero participar
        </button>
      </section>
    </div>
  );
}