import './style.css'
import './loginStyle.css'
// import fetch from 'node-fetch';
import Navigo from 'navigo';
const app: any = document.querySelector("#app");
const router = new Navigo('/');
import fetchApi from './fetchApi';
const renderHomePage = () => {
  if (!window.localStorage.getItem('token')) {
    return `<h1> Trang chu</h1>
    <br/>
      <a class="login-btn" href="/login">Đăng nhập</a>
    `;
  }
  else {
    return `<h1> Trang chu</h1>
    <br/>
        <button class="logOut-btn"> Log Out</button>
      `
  }

};
const renderLoginPage = () => {
  return `
      <div class="login-container" >
        <form class="login-box" >
          <input class="email" type = "text" placeholder = "Email address or phone number" />
            <input class="password" type = "password" placeholder = "Password" />
              <button class="login-btn" type = "submit" > Log in </button>
                </form>
                </div>
                  `;
}

const render = (target, content) => {
  target.innerHTML = content();
}

router.on('/', () => render(app, renderHomePage))
router.on('/login', () => render(app, renderLoginPage))
router.resolve();


document.querySelector(".login-box")?.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValue = (document.querySelector(".email") as HTMLInputElement)?.value;
  const passwordValue = (document.querySelector(".password") as HTMLInputElement)?.value;
  console.log(emailValue, passwordValue);
  const email = emailValue;
  const password = passwordValue;

  const auth = {
    email,
    password
  }
  fetchApi(auth);
});

const logOutBtn = document.querySelector(".logOut-btn")
logOutBtn?.addEventListener("click", () => {
  window.location.href = "/login";
  window.localStorage.removeItem("token");
})