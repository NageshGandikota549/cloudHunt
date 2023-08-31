import React, { useState } from "react";

//model
export class UserDetails {
  userName: string = "";
  email: string = "";
  password: string = "";
  dob?: Date = new Date();
}

// type UserDetails1 = {
//   userName: string;
//   email: string;
//   password: string;
//   dob: Date;
// };

export const Register = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>(
    new UserDetails()
  );

  // const [value, setValue] = useState<string>("");
  // const [num, setNum] = useState<number>(123);
  // const [data, setData] = useState<UserDetails[]>([]);

  // const userAge: number = 19;
  // const userName: string = "fsdfsadf";
  // const dob: Date = new Date();

  // setUserDetails({
  //   userName: "nagesh",
  //   email: "",
  //   password: "",
  //   dob: new Date(),
  // });

  return (
    <div>
      <form>
        {/* {userAge} */}
        <input type="text" value={userDetails.userName} />
      </form>
    </div>
  );
};
