import emailjs from "emailjs-com";
const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qboc5ul",
        "template_vc62elx",
        e.target,
        "gWnK_bGahzDvkuB0i"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={sendEmail}>
        <textarea name="message" rows="4" />
        <br></br>
        <input
          type="submit"
          value="submit"
          className="btn btn-dark px-4 mt-2"
        />
      </form>
    </div>
  );
};
export default Mailer;
