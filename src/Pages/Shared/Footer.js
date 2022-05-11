import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div
      style={{ background: `url(${footerBg})` }}
      className="bg-no-repeat bg-cover bg-center"
    >
      <footer class="footer justify-around container mx-auto px-4">
        <div className="text-center">
          <span class="footer-title">Services</span>
          <Link to="#" class="link link-hover">
            Branding
          </Link>
          <Link to="#" class="link link-hover">
            Design
          </Link>
          <Link to="#" class="link link-hover">
            Marketing
          </Link>
          <Link to="#" class="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <Link to="#" class="link link-hover">
            About us
          </Link>
          <Link to="#" class="link link-hover">
            Contact
          </Link>
          <Link to="#" class="link link-hover">
            Jobs
          </Link>
          <Link to="#" class="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to="#" class="link link-hover">
            Terms of use
          </Link>
          <Link to="#" class="link link-hover">
            Privacy policy
          </Link>
          <Link to="#" class="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <div className="text-center p-5">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
