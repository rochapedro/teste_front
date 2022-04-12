import nookies, { parseCookies } from 'nookies';

export async function createContributor(data) {
  const { token } = parseCookies();

  console.log(token);

  const res = await fetch(
    // eslint-disable-next-line no-undef
    `${process.env.NEXT_PUBLIC_API_URL}/contributors/${data.company_id}`,
    {
      body: JSON.stringify({
        name: data.name,
        last_name: data.last_name,
        cpf: data.cpf,
        email: data.email,
        telephone: data.telephone,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
    },
  );
}
