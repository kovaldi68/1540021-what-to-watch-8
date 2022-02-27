import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

function Error404(): JSX.Element {
  return (
    <>
      <Header>
        
      </Header>
      <section style={{ textAlign: 'center'}}>
        <h1>
          404 Not Found
        </h1>
        <Link to='/'>Go to main page</Link>
        <p>
          You are not supposed to be here. There is nothing to see.
        </p>
        <div>
          <img src='img/404-not-found.gif' alt='404 error'/>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Error404;
