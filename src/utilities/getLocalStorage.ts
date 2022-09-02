let getLocalStorage: string | null;

if (localStorage.getItem("User_Name")) {
  // @ts-ignore
  getLocalStorage = JSON.parse(localStorage.getItem("User_Name"));
} else {
  getLocalStorage = null;
}

let getLocalTheme: string | null;

if (localStorage.getItem("Todo_Theme")) {
  // @ts-ignore
  getLocalTheme = JSON.parse(localStorage.getItem("Todo_Theme"));
} else {
  getLocalTheme = null;
}

export { getLocalStorage, getLocalTheme };
