import "./home.css"; 
import Header from './components/Header/header'; 
import Footer from './components/Footer/footer'; 

export default function Home() {
  return (
    <div className="main-container"> {}
      <Header />
      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.title}>Nosso Menu</h2>
          <ul style={styles.menuList}>
            <li style={styles.menuItem}>
              <strong>Pizza Margherita</strong> - R$ 45,00
            </li>
            <li style={styles.menuItem}>
              <strong>Spaghetti alla Carbonara</strong> - R$ 50,00
            </li>
            <li style={styles.menuItem}>
              <strong>Lasagna Bolognese</strong> - R$ 60,00
            </li>
            <li style={styles.menuItem}>
              <strong>Tiramisu</strong> - R$ 20,00
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.title}>Localização</h2>
          <p style={styles.paragraph}>
            Rua da Gastronomia, 123 - Bairro Italiano, São Paulo, SP
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
 
  main: {
    padding: '20px', 
    marginTop: '20vh', 
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#FFFFFF'
  },


  section: {
    marginBottom: '40px',
  },

  title: {
    color: '#D32F2F',
    fontSize: '2rem',
  },

  menuList: {
    listStyleType: 'none',
    paddingLeft: '0',
    fontSize: '1.25rem',
  },

  menuItem: {
    marginBottom: '10px',
  },

  paragraph: {
    fontSize: '1.25rem',
    lineHeight: '1.6',
  },
};
