let getLocalStorage: any;

if (localStorage.getItem("User_Name")) {
  // @ts-ignore
  getLocalStorage = JSON.parse(localStorage.getItem("User_Name"));
} else {
  getLocalStorage = null;
}

export default getLocalStorage;
