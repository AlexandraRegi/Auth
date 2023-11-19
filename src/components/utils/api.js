   class Api {
  
    signin(data) {
      return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve('ok')
        })
    });
    }
  
    signup(data) {
      return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve('ok')
        })
    });
    }
  };
  
  export const api = new Api();