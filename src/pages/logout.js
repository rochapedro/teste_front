import nookies from 'nookies';

export default function Index() {
  return;
}

export async function getServerSideProps(ctx) {
  const { token } = nookies.get(ctx);

  nookies.destroy(ctx, 'token', {
    path: '/',
  });

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}
