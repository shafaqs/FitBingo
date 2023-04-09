import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Login(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const router = useRouter();
  console.log(props);
  const handleClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    axios.post("/api/login", { email, password })
      .then(res => {
        console.log(res);
        router.replace(`/user/${res.data.id}`);
      });
  };
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" ref={emailRef} />
      <label htmlFor="password">password</label>
      <input type="password" ref={passwordRef} />
      <button onClick={handleClick}>submit</button>
    </div>

  );
}
export async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
  console.log(posts);
  return {
    props: { posts }
  };
}