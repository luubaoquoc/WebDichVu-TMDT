const timesservices = {
    diennuoc: {
      name: "Điện nước",
      services: {
        lapdatdienlanh: {
          name: "Lắp đặt điện lạnh",
          timeSlots: ["7.00 - 8.30", "8.30 - 10.00", "10.00 - 11.30", "11.30 - 13.00", "13.00 - 14.30", "14.30 - 16.00", "16.00 - 17.30", "17.30 - 19.00"]
        },
        suachuadienlanh: {
          name: "Sửa chữa điện lạnh",
          timeSlots: ["7.00 - 8.00","9.00 - 10.00", "10.00 - 11.00", "11.00 - 12.00", "12.00 - 13.00", "13.00 - 14.00", "14.00 - 15.00", "15.00 - 16.00", "16.00 - 17.00"]
        }
      }
    },
    hutbephot: {
      name: "Hút bể phốt",
      services: {
        xulyduongong: {
          name: "Xử lý đường ống",
          timeSlots: ["7.00 - 9.00", "9.00 - 11.00", "11.00 - 13.00", "13.00 - 15.00", "15.00 - 17.00"]
        },
        thongtatcong: {
          name: "Thông tắc cống",
          timeSlots: ["7.00 - 9.00", "9.00 - 11.00", "11.00 - 13.00", "13.00 - 15.00", "15.00 - 17.00"]
        }
      }
    }
  };
  
  export default timesservices;
  