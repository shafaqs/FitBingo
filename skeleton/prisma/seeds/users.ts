import { User } from "@prisma/client"; 

const users: User[] = [
  {
    id: 1,
    email: "jane112@gmail.com",
    experience_points: 600,
    password: "123",
    avatar: null
  },
  {
    id: 2,
    email: "jason435@gmail.com",
    experience_points: 1400,
    password: "123",
    avatar: null
  },
  {
    id: 3,
    email: "grace798@gmail.com",
    experience_points: 0,
    password: "123",
    avatar: null
  },
  {
    id: 4,
    email: "gregk90@gmail.com",
    experience_points: 3900,
    password: "123",
    avatar: null
  }
];

export default users;