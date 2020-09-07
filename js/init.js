const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();

      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

  //Función que ejecuta el login.
  function redirectLogin() {

    let url = location.href;
    let urlLogin = url.slice(0, -10) + "login.html";

    if (localStorage.getItem('email') == null && localStorage.getItem("password") == null){
      if (location.href !== urlLogin){
        location.href = "login.html"
      }
    }
  }

  redirectLogin();


  //Función que se ejecuta cuando se raliza clic en Cerrar sesión

  let buttonSignOff = document.getElementById("sign-off");
  buttonSignOff.addEventListener("click", signOff);

  function signOff() {
    localStorage.clear();
    location.reload();
  }

  //Funcion que ejecuta el nombre de usuario en pantalla

  const userName = document.getElementById("username");

  function user() {
    if (localStorage.getItem('email') != null || localStorage.getItem != undefined)
      userName.innerHTML = `<span id="username" class="user-name">` + localStorage.getItem('email') + `</span>`
  }
  user();


  // Funcion para iniciar sesion con google.
  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();

    const email = profile.getEmail();
    const password = "password";

    localStorage.setItem("email", email);
    localStorage.setItem("password", "password");
    /*Redirecciona a index.html*/
    window.location.href = "index.html";
  }


  //Funcion que se ejecuta cuando se realiza clic en boton cerrar sesion
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    localStorage.clear();
    location.reload();
      });
   }

   function onLoad() {
    gapi.load('auth2', function () {
      gapi.auth2.init();
    });
    }

//Funcion que llama a la API productos, para mostrar los productos relacionados en product-info.html
    var getJSONDataProductRelated = function (url) {
      var result = {};
      return fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error(response.statusText);
          }
        })
        .then(function (response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
        })
        .catch(function (error) {
          result.status = 'error';
          result.data = error;
          return result;
        });
    }


//Funcion que llama a la API comentarios para ser mostrados en product-info.html

var getJSONDataComments = function (url) {
  var result = {};
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });
}


