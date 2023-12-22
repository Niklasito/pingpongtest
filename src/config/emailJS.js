import emailjs from "@emailjs/browser";

function sendGameInvitationEmail() {
  emailjs.init(import.meta.env.VITE_REACT_APP_EMAIL_JS_KEY);

  var templateParams = {
    name: "JAN OWE WALDNER",
  };

  emailjs.send("service_6yvd37a", "template_bl8y6be", templateParams).then(
    function (response) {
      console.log("email-sent", response.status, response.text);
    },
    function (error) {
      console.error(error);
    }
  );
}
