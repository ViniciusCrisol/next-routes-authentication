import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container } from '../styles/pages/Home';

const PrivatePage: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Private</title>
      </Head>

      <h2>Página privada</h2>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return { props: {} };
};

export default PrivatePage;
