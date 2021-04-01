import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = ({ children }) => {
  return (
    <footer className="fotter">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copyright&copy;{new Date().getFullYear()}</h4>
        <span>WebDev</span> all rights reserved
      </div>
    </footer>
  )
}

export default Footer
