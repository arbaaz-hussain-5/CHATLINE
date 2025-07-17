import "./Lander.css";


function Lander() {
  
  return (
    <div className="no_nav">
      <div className="lander">
        <h1>WELCOME TO CHATLINE</h1>
        <h2>An instant secure text messinging App</h2>
      </div>
      <div className="m_lander">
        <img src="https://static.vecteezy.com/system/resources/previews/012/697/220/non_2x/voip-or-voice-over-internet-protocol-with-telephony-scheme-technology-and-network-phone-call-software-in-template-hand-drawn-cartoon-flat-illustration-vector.jpg" alt="" />
      </div>
     
      <div className="footer-container">
        <div>
          <h2 className="footer-title">CHATLINE — Private, Fast & Simple</h2>
          <p className="footer-description">
            Welcome to CHATLINE — the all-in-one platform for messaging, voice
            and video calls. We prioritize privacy with industry-grade
            end-to-end encryption while offering a fast and elegant user
            experience.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Explore</h4>
          <div className="footer-links">
            <a href="#">Privacy</a> |<a href="#">Terms</a> |
            <a href="#">Security</a> |<a href="#">Status</a> |
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <p>
            Support:{" "}
            <a href="mailto:mdarbaazhussain666@gmail.com">
              mdarbaazhussain666@gmail.com
            </a>
            <br />
            Press:{" "}
            <a href="mdarbaazhussain555@gmail.com.com">
              mdarbaazhussain555@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-section footer-legal">
          <p>
            All communications are encrypted. Your data stays with you. We do
            not sell or share your personal information with third parties.
          </p>
        </div>
        <div className="footer-meta">
          v1.0.0 &nbsp;|&nbsp; Language: English (India)
        </div>
        <div className="footer-copy">
          © 2025 CHATLINE Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Lander;
