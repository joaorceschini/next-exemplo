import { useState } from "react";
import { NavLink } from "react";

export default function Header({title}) {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <header>
      { title }

      { isLogin && <h1>Mateus</h1> }
      { !isLogin && <button onClick={() => setIsLogin(true)}>Login</button> }

    </header>
  )
}