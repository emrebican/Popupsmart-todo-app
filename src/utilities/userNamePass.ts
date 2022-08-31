const REGEX = /[0-9a-zA-Z]{3,}/;

export const userNamePass = (userName: string) => {
  if (userName.trim() && userName.match(REGEX)) return true;
};
