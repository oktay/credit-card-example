import $ from "jquery";

export default class Simulate {
  constructor({ event, el, changeEl, placeholder }) {
    this.event = event;
    this.el = el;
    this.changeEl = changeEl;
    this.placeholder = placeholder;
  }

  watch() {
    $(document).on("focus", this.el, () => {
      $(this.changeEl).addClass("ring-2 ring-gray-200 ring-offset-4");
    });

    $(document).on("blur", this.el, () => {
      $(this.changeEl).removeClass("ring-2 ring-gray-200 ring-offset-4");
    });

    $(document).on(this.event, this.el, ({ target }) => {
      if (target.value.length) {
        $(this.changeEl).text(target.value);
        $(this.changeEl).addClass("text-black");
      } else {
        $(this.changeEl).text(this.placeholder);
        $(this.changeEl).removeClass("text-black");
      }
    });
  }
}
