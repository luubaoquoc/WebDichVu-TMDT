export const validateRegister = (formData) => {
  const errors = {};

  if (!formData.user_name) errors.user_name = "Vui lòng nhập tên.";
  if (!formData.user_email) {
    errors.user_email = "Vui lòng nhập email.";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      errors.user_email = "Email không hợp lệ.";
    }
  }


  if (!formData.user_password) {
    errors.user_password = "Vui lòng nhập mật khẩu.";
  } else if (formData.user_password.length < 6) {
    errors.user_password = "Mật khẩu phải ít nhất 6 ký tự.";
  }

  if (!formData.confirm_password) {
    errors.confirm_password = "Vui lòng xác nhận mật khẩu.";
  } else if (formData.user_password !== formData.confirm_password) {
    errors.confirm_password = "Mật khẩu xác nhận không khớp.";
  }

  const valid = Object.keys(errors).length === 0;

  return { valid, errors };
};

export const validateEdit = (formData) => {
  const { user_name, user_email, user_phone } = formData;
  const errors = {};

  if (!user_name) errors.user_name = "Vui lòng nhập tên.";
  if (!user_email) {
    errors.user_email = "Vui lòng nhập email.";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      errors.user_email = "Email không hợp lệ.";
    }
  }

  if (!user_phone) {
    errors.user_phone = "Vui lòng nhập số điện thoại.";
  } else {
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(user_phone)) {
      errors.user_phone = "Số điện thoại không hợp lệ (VD: 0912345678).";
    }
  }

  const valid = Object.keys(errors).length === 0;
  return { valid, errors };
};
