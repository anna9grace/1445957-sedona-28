var formButton = document.querySelector(".btn-open-search");
var form = document.querySelector(".search-form");
var checkIn = form.querySelector("[name=check-in]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
var formFields = form.querySelectorAll("input:not([name=children])");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";


try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch(err) {
  isStorageSupport = false;
}

form.classList.add("form-hide");


formButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("form-hide");
  form.classList.toggle("form-show");
  form.classList.remove("form-error");
  checkIn.focus();

  if (storageAdults) {
    adults.value = storageAdults;
  }

  if (storageChildren) {
    children.value = storageChildren;
  }
})


form.addEventListener("submit", function(evt) {
  for (formField of formFields) {
    if (!formField.value) {
      evt.preventDefault();
      form.classList.remove("form-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("form-error");
      formField.classList.add("input-error");
    } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
    }
  }
})


form.addEventListener("keydown", function(evt) {
    for (formField of formFields) {
    formField.classList.remove("input-error");
    }
  }
)

