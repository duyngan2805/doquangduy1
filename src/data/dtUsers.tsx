interface Address {
  province: string;
  city: string;
  address: string;
}
type User = {
  Id: string | number;
  FirstName: string;
  LastName: string;
  Gender: "male" | "female";
  Birthday: string;
  address: Address;
  Phone: string;
  Email: string;
  Active: number;
  Created_at: string;
  Updated_at: string;
  Deleted_at: string;
};

const dataUsers: User[] = [
  {
    Id: 1,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
  {
    Id: 2,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
  {
    Id: 3,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
  {
    Id: 4,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
  {
    Id: 5,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
  {
    Id: 6,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
  {
    Id: 7,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
  {
    Id: 8,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
  {
    Id: 9,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
  {
    Id: 10,
    FirstName: "Quang",
    LastName: "Duy",
    Gender: "male",
    Birthday: "07/08/2002",
    address: {
      province: "Hà Nam",
      city: "Hà Nam",
      address: "Kim Bảng",
    },
    Phone: "0379240479",
    Email: "duy0708@gmail.com",
    Active: 0,
    Created_at: "07/08/2002",
    Updated_at: "07/08/2002",
    Deleted_at: "07/08/2002",
  },
];
export default dataUsers;