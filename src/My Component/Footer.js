import React from 'react'

export default function Footer() {
  let FooterStyle = {
    position: "relative",
    bottom: "0px",
    width: "100%",
  }
  return (
    <footer className='bg-dark text-light  py-2 mt-4' style={FooterStyle}>
      <p className='text-center'>Copyright @ 2023 | Todo List by Pallab</p>
    </footer>
  )
}
