import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div className="FooterClass">
       <br/>
      <footer>
        <p>©2023, FashionStore</p>
        <div className="notice">
        <p>The content of this site is copyright-protected and is the property of FashionStore. FashionStore is committed to accessibility. That commitment means FashionStore embraces WCAG guidelines .If you are experiencing difficulties using this website, please call our TOLL-FREE support line (000-111-222) for assistance.</p>
        </div>
        
        <p>
          <a className="footerLink" href="mailto:FashionStore@example.com">FashionStore@example.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
