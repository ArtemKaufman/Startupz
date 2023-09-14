const host = 'https:some/host/';

export async function submitForm(values) {
  const { name, email, message } = values;
  try {
    await host.patch('/ourUrl', {
      name: name,
      email: email,
      message: message,
    });
    return data;
  } catch (error) {
    console.error('Error updating data', error);
    return null;
  }
}
