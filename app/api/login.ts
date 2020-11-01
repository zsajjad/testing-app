import service from './service';

export const LOGIN_ENDPOINT = '/api/v1/auth/local';
export const LOGIN_EXPECTED_RESPONSE = {
  data: {
    tokens: {
      jwtToken:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJkY2UxYzYwMC1hZGFjLTQ3YTctOTdkNi1lYmRjNzBjYTUwODEiLCJpc3MiOiJEZXZyaW0tQXV0aC1TZXJ2aWNlIiwiZXhwIjoxNjAwNzYyNDkxLjcxNCwiaWF0IjoxNjAwNzYyMzExfQ.dXE0TUUOUpd33EuJtQ2rDEImAK-49ZI3KC7vOOiczjAMVN01Fqg4qyun-HqZuxDeOkAlZyP1tGZRHUNCAZG7vIA5LpT4D4A_1kCvWiXO6X951T0Vb4qfhGdQ3BJkuLeAqoA9sIs-Fw5o4VW6Fss53ZAuvgkkM-TolmgXmmlsVkftz0WXQLHlgd6trNkPr9_G3z-lNa5kSPOYcTw3ILUNrOCs1FJY0a7uGltsFcNScTpaReIqWmLJui2FC5trqz_jqN_OgrrNOp8VvEkMVtwNQxfaYAmUs8QBp-xhEtp421mN1uQiUzLWnWDWC5lHbqqXD3CjJ4OBAIgj-961TrlsfA',
    },
  },
};

export default function loginAPI({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<void> {
  return service({
    url: LOGIN_ENDPOINT,
    method: 'POST',
    body: {
      email,
      password,
    },
  });
}
