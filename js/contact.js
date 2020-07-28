$("#contact .btn-submit-contact").click(function() {
  var a = $("#contact #fullname").val();

  // if (!validator.isEmail($("#contact #fullname").val())) {
  //   $("#contact #erro").text("Email is not valid");
  // } else {
  //   $("#contact #erro").text("");
  // }

  if (
    validator.isEmpty($("#contact #fullname").val()) ||
    validator.isEmpty($("#contact #phone").val()) ||
    validator.isEmpty($("#contact #email").val())
  ) {
    $("#contact .erro").text("Xin nhập đầy đủ thông tin");
  } else {
    if (!validator.isEmail($("#contact #email").val())) {
      $("#contact .erro").text("Email không hợp lệ");
    } else {
      $("#contact .erro").text("");
    }
    if (!validator.isMobilePhone($("#contact #phone").val())) {
      $("#contact .erro").text("Phone không hợp lệ");
    } else {
      $("#contact .erro").text("");
    }
  }
});
