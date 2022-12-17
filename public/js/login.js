const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: ' http://localhost:8000/api/v1/users/login',
      data: {
        email: email,
        password: password,
        withCredentials: true,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err.response);
  }
};

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
