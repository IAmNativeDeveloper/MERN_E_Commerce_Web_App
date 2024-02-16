export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email === "") {
    return "Email is required";
  } else if (!regex.test(email)) {
    return "Invalid email address";
  } else {
    return "";
  }
};

export const validatePassword = (password: string) => {
  if (!password || password === "") {
    return "Password is required";
  } else if (password.length < 8) {
    return "Password must be at least 8 characters long";
  } else if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one capital letter";
  } else if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number";
  } else if (!/[!@#$%^&*]/.test(password)) {
    return "Password must contain at least one symbol";
  } else {
    return "";
  }
};
