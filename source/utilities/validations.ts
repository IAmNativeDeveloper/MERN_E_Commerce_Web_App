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

export const validateName = (name: string) => {
  if (!name || name === "") {
    return "Name is required";
  } else if (/[!@#$%^&*]/.test(name)) {
    return "Name cannot contain symbols";
  } else {
    return "";
  }
};

export const validatePhone = (phone: string) => {
  if (!phone || phone === "") {
    return "Mobile number is required";
  } else if (/\s/.test(phone)) {
    return "Phone number should not contain spaces";
  } else if (phone.length < 10 || phone.length > 10) {
    return "Invalid mobile number";
  } else {
    return "";
  }
};

export const validateOtp = (otp: string) => {
  if (!otp || otp === "") {
    return "OTP is required";
  } else if (/\s/.test(otp)) {
    return "OTP should not contain spaces";
  } else if (otp.length < 6 || otp.length > 6) {
    return "Invalid OTP";
  } else {
    return "";
  }
};
