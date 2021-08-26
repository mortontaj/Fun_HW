function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("name").value,
    to_name: document.getElementById("email").value,
    message: document.getElementById("msg").value,
  };
  emailjs.send("Gmail", "template_hoo9nwu", tempParams).then(function (res) {
    console.log("succces", res.status);
  });
}
