class ProductApi {
  static getAllProducts() {
    fetch("http://www.google.com").then(response => {
      if (response.ok) {
        return response;
      }
      return Promise.reject(Error('error'));
    }).catch(error => {
      return Promise.reject(Error(error.message));
    });
  }
}