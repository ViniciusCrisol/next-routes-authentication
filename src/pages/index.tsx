import { useCallback } from 'react';
import Cookie from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Button } from '../styles/pages/Home';

const Home: React.FC = () => {
  const signIn = useCallback(() => {
    Cookie.set('token', 'JWT');
  }, []);

  const signOut = useCallback(() => {
    Cookie.remove('token');
  }, []);

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <h2>Página pública</h2>

      <div>
        <Button onClick={signIn}>Sign in</Button>
        <Button onClick={signOut}>Sign out</Button>
      </div>

      <Link href="/private-page">
        <a>Página privada</a>
      </Link>
    </Container>
  );
};

export default Home;
