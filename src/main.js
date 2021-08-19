import "./style.css";
import Inputmask from "inputmask";
import $ from "jquery";
import "jquery-validation";

Inputmask({
  placeholder: "",
  showMaskOnFocus: false,
  showMaskOnHover: false,
}).mask(document.querySelectorAll("input"));

function simulate(event, el, changeEl, placeholder) {
  $(document).on("focus", el, () => {
    $(changeEl).addClass("ring-2 ring-gray-200 ring-offset-4");
  });

  $(document).on("blur", el, () => {
    $(changeEl).removeClass("ring-2 ring-gray-200 ring-offset-4");
  });

  $(document).on(event, el, ({ target }) => {
    if (target.value.length) {
      $(changeEl).text(target.value);
      $(changeEl).addClass("text-black");
    } else {
      $(changeEl).text(placeholder);
      $(changeEl).removeClass("text-black");
    }
  });
}

simulate("keyup", "#name", ".js-name", "Name Surname");
simulate("keyup", "#number", ".js-number", "XXXX XXXX XXXX XXXX");
simulate("keyup", "#cvv", ".js-cvv", "XXX");
simulate("change", "#expire_month", ".js-expire-month", "XX");
simulate("change", "#expire_year", ".js-expire-year", "XXXX");

$("form").validate({
  errorElement: "p",
  rules: {
    name: {
      required: true,
    },
    number: {
      required: true,
      minlength: 16,
    },
    cvv: {
      required: true,
      minlength: 3,
    },
    month: {
      required: true,
    },
    year: {
      required: true,
    },
  },
});

$(document).on("submit", "form", (event) => {
  event.preventDefault();

  const results = {
    name: $("#name").val(),
    number: $("#number").val(),
    expire: [$("#expire_month").val(), $("#expire_year").val()].join("/"),
    cvv: $("#cvv").val(),
  };

  console.table(results);
});
