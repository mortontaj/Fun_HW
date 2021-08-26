function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    to_name: "Taj",
    message: document.getElementById("msg").value,
  };

  emailjs.send("gmail", `template_hoo9nwu`, tempParams).then(function (res) {
    console.log("succces", res.status);
  });
}
