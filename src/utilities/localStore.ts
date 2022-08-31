let localStore: any;

if (localStorage.getItem("User_Name")) {
  // @ts-ignore
  localStore = JSON.parse(localStorage.getItem("User_Name"));
} else {
  localStore = null;
}

export default localStore;
