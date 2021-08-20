import "./style.css";
import "jquery-validation";
import Inputmask from "inputmask";
import Simulate from "./js/utils/simulate";
import $ from "jquery";

new Inputmask({
  placeholder: "",
  showMaskOnFocus: false,
  showMaskOnHover: false,
}).mask(document.querySelectorAll("input"));

new Simulate({
  event: "keyup",
  el: "#name",
  changeEl: ".js-name",
  placeholder: "NAME SURNAME",
}).watch();

new Simulate({
  event: "keyup",
  el: "#number",
  changeEl: ".js-number",
  placeholder: "XXXX XXXX XXXX XXXX",
}).watch();

new Simulate({
  event: "keyup",
  el: "#cvv",
  changeEl: ".js-cvv",
  placeholder: "XXX",
}).watch();

new Simulate({
  event: "change",
  el: "#expire_month",
  changeEl: ".js-expire-month",
  placeholder: "XX",
}).watch();

new Simulate({
  event: "change",
  el: "#expire_year",
  changeEl: ".js-expire-year",
  placeholder: "XXXX",
}).watch();

$("form").validate({
  errorElement: "p",
  rules: {
    number: {
      minlength: 16,
    },
    cvv: {
      minlength: 3,
    },
  },
});

$(document).on("submit", "form", (event) => {
  const result = $("form").serializeArray();

  event.preventDefault();
  console.table(result);
});
