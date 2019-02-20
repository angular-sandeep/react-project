class APIService {
  // Authorized user info
  isAuthorized(email) {
    let promise = fetch("http://localhost:8080/api/users/authorized", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(email)
    });
    return promise;
  }

  // login service
  isAuthenticate(user) {
    let promise = fetch("http://localhost:8080/api/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    return promise;
  }

  // add role service
  addRole(role) {
    let promise = fetch("http://localhost:8080/api/roles/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(role)
    });
    return promise;
  }

  // add new user
  addNewUser(user) {
    let promise = fetch("http://localhost:8080/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(user)
    });
    return promise;
  }

  // add new person
  addNewPerson(person) {
    let promise = fetch("http://localhost:8080/api/person/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(person)
    });
    return promise;
  }

  // find person by user /person id
  findPersonById(PersonId) {
    let promise = fetch(`http://localhost:8080/api/person/${PersonId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    });
    return promise;
  }

  // get all users
  getAllUser() {
    let promise = fetch("http://localhost:8080/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    });
    return promise;
  }

  /*
    getting data based on status like Pending, Approved, Rejected
  */
  findUserByStatus(user) {
    let promise = fetch("http://localhost:8080/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(user)
    });
    return promise;
  }

  /*
    checking uniqueness of username
  */
  checkUniqueUserName(user) {
    let promise = fetch("http://localhost:8080/api/users/checkUserName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(user)
    });
    return promise;
  }

  /*
    checking uniqueness of username
  */
  checkUniqueMobileNo(user) {
    let promise = fetch("http://localhost:8080/api/users/checkMobileNo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(user)
    });
    return promise;
  }

  /*
    checking uniqueness of username
  */
  checkUniqueEmail(user) {
    let promise = fetch("http://localhost:8080/api/users/checkEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(user)
    });
    return promise;
  }

  // updateData(id, prd) {
  //   let promise = fetch(`http://localhost:3000/api/product/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(prd)
  //   });
  //   return promise;
  // }

  // deleteData(id) {
  //   let promise = fetch(`http://localhost:3000/api/product/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });
  //   return promise;
  // }
}

export default APIService;
