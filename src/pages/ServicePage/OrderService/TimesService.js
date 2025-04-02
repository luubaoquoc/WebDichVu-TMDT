const timesservices = {
    diennuoc: {
      name: "Điện nước",
      services: {
        lapdatdienlanh: {
          name: "Lắp đặt điện lạnh",
          timeSlots: ["7.00 - 8.30", "8.30 - 10.00", "10.00 - 11.30"]
        },
        suachuadienlanh: {
          name: "Sửa chữa điện lạnh",
          timeSlots: ["9.00 - 10.30", "10.30 - 12.00", "13.30 - 15.00"]
        }
      }
    },
    hutbephot: {
      name: "Hút bể phốt",
      services: {
        xulyduongong: {
          name: "Xử lý đường ống",
          timeSlots: ["8.00 - 9.30", "9.30 - 11.00", "11.00 - 12.30"]
        },
        thongtatcong: {
          name: "Thông tắc cống",
          timeSlots: ["13.00 - 14.30", "14.30 - 16.00", "16.00 - 17.30"]
        }
      }
    }
  };
  
  export default timesservices;
  