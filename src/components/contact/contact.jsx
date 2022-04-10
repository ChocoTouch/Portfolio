import { useState } from "react";
import emailjs from "emailjs-com"
import "./contact.scss";

export default function Contact() {

  const [msg,setMsg] = useState(false)


  const sendMail = (e) => {
    e.preventDefault();
    setMsg(true);
    emailjs.sendForm("service_bxofv0g","template_1e488ak",e.target,"qTKqe4OIWTsY72NNq").then(res=>{console.log(res);}).catch(err=> console.log(err));

  }



  return (
    <div className="contact" id="contact">
      <div className="g">
        <div className="c">
          <h2>Contact</h2>
          <form onSubmit={sendMail}>
            <input type="email" placeholder="Votre adresse e-mail" name="lemail"required/>
            <textarea placeholder="Votre message" name="lemessage" required ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        {msg && <span>Merci, je tâcherais de vous répondre au plus vite !</span>}
      </div>
      <div className="d">
        <img src="assets/Contact01.jpg" alt="" />
      </div>
    </div>
  );
}
