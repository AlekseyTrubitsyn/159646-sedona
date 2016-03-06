var bookingPopup = document.querySelector(".booking-popup");
var bookingFormShowButton = document.querySelector(".search-form-btn");

var bookingFormAdultsCountButtonMinus = document.querySelector("#booking-form-adults-count-minus-button");
var bookingFormAdultsCountButtonPlus = document.querySelector("#booking-form-adults-count-plus-button");
var bookingFormAdultsCountInput = document.querySelector("#booking-form-adults-count-input");

var bookingFormKidsCountButtonMinus = document.querySelector("#booking-form-kids-count-minus-button");
var bookingFormKidsCountButtonPlus = document.querySelector("#booking-form-kids-count-plus-button");
var bookingFormKidsCountInput = document.querySelector("#booking-form-kids-count-input");

var adultsCount = bookingFormAdultsCountInput.value;
var adultsMin = Number(bookingFormAdultsCountInput.min);
var adultsMax = Number(bookingFormAdultsCountInput.max);

var kidsCount = bookingFormKidsCountInput.value;
var kidsMin = Number(bookingFormKidsCountInput.min);
var kidsMax = Number(bookingFormKidsCountInput.max);

var gMapsImage = document.querySelector("#staticMap");

if (gMapsImage)
 gMapsImage.classList.add("hide-this");

bookingFormShowButton.addEventListener("click", function(event) {
  event.preventDefault();
  bookingPopup.classList.remove("popup-invisible");
});

bookingFormAdultsCountButtonMinus.addEventListener("click", function(event) {
  event.preventDefault();
  adultsCount = Number(bookingFormAdultsCountInput.value);

  if (adultsCount > adultsMin && adultsCount <= adultsMax )
    bookingFormAdultsCountInput.value = Number(adultsCount) - 1;

  else if ( kidsCount > adultsMin )
    bookingFormAdultsCountInput.value = adultsMax;

  else
    bookingFormAdultsCountInput.value = adultsMin;
});

bookingFormAdultsCountButtonPlus.addEventListener("click", function(event) {
  event.preventDefault();
  adultsCount = bookingFormAdultsCountInput.value;
  if (adultsCount < adultsMax && adultsCount >= adultsMin)
    bookingFormAdultsCountInput.value = Number(adultsCount) + 1;

  else if ( kidsCount < adultsMin )
    bookingFormAdultsCountInput.value = adultsMin;

  else
    bookingFormAdultsCountInput.value = adultsMax;
});

bookingFormKidsCountButtonMinus.addEventListener("click", function(event) {
  event.preventDefault();
  kidsCount = bookingFormKidsCountInput.value;
  if (kidsCount > kidsMin && kidsCount <= kidsMax)
    bookingFormKidsCountInput.value = Number(kidsCount) - 1;

  else if ( kidsCount > kidsMax )
    bookingFormKidsCountInput.value = kidsMax;

  else
    bookingFormKidsCountInput.value = kidsMin;
});

bookingFormKidsCountButtonPlus.addEventListener("click", function(event) {
  event.preventDefault();
  kidsCount = bookingFormKidsCountInput.value;
  if (kidsCount < kidsMax && kidsCount >= kidsMin)
    bookingFormKidsCountInput.value = Number(kidsCount) + 1;

  else if ( kidsCount < kidsMax )
    bookingFormKidsCountInput.value = kidsMin;

  else
    bookingFormKidsCountInput.value = kidsMax;
});
