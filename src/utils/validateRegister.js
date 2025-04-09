export const validateRegister = (formData) => {
    const { user_name, user_email, user_phone, user_password, confirm_password } = formData;
  
    if (!user_name || !user_email || !user_phone || !user_password || !confirm_password) {
      return { valid: false, message: "Vui lòng điền đầy đủ thông tin!" };
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      return { valid: false, message: "Email không hợp lệ!" };
    }
  
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(user_phone)) {
        return { valid: false, message: "Số điện thoại không hợp lệ! (Ví dụ: 0912345678)" };
    }
    
    if (user_password.length < 6) {
      return { valid: false, message: "Mật khẩu phải có ít nhất 6 ký tự!" };
    }
  
    if (user_password !== confirm_password) {
      return { valid: false, message: "Mật khẩu xác nhận không khớp!" };
    }
  
    return { valid: true };
  };
  