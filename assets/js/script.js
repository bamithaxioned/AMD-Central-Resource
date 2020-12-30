// ============================================== CODE FOR HAMBURGER STARTS HERE
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".navigation").toggleClass("active");
    if ($(this).hasClass("active")) $("html, body").css({ overflow: "hidden" });
    else $("html, body").css({ overflow: "auto" });
  });
});
// ============================================== CODE FOR HAMBURGER ENDS HERE

// ============================================== CODE FOR DISPLAYING CARD(AJAX) STARTS HERE
// GRABBING ELEMENTS
let loadBtn = document.querySelector(".load-btn");
let ul = document.querySelector(".display-card");
// AJAX STARTS HERE
let xhr = new XMLHttpRequest();

xhr.open("GET", 'assets/js/dummy.json', true);

xhr.onload = function () {
  if (this.status === 200) {
    let users = JSON.parse(this.responseText);
    // DISPLAYING  FIRST 12 DATA
    // NO OF CARDS TO BE DISPLAYED ON LOAD
    let cardDisplay = 12;
    for (var i = 0; i < cardDisplay; i++) {
      let li = document.createElement("li");
      li.innerHTML += `<figure>
                          <img src="${users[i].image}" alt="People-Image"/>
                      </figure>
                      <div class="display-content">
                          <h3 class="display-heading">${users[i].title}</h3>
                          <p class="display-para">${users[i].description}</p>
                          <a href="${users[i].URL}" title="Learn More" class="btn learn-more upper-case">Learn More</a>
                      </div>`
      ul.appendChild(li);
    }
    // CODE TO DISPLAY NEXT SIX ITEMS ON BUTTON CLICK
    var a = i;
    // NO OF CARDS TO BE DISPLAYED ON CLICK
    let noOfElement = 6;
    loadBtn.addEventListener("click", function () {
      for (var j = a; j < a + noOfElement; j++) {
        if (j < users.length) {
          let li = document.createElement("li");
          li.innerHTML += `<figure>
                              <img src="${users[j].image}" alt="People-Image"/>
                          </figure>
                          <div class="display-content">
                              <h3 class="display-heading">${users[j].title}</h3>
                              <p class="display-para">${users[j].description}</p>
                              <a href="${users[j].URL}" title="Learn More" class="btn learn-more upper-case">Learn More</a>
                          </div>`
          ul.appendChild(li);
        }
        if (j >= users.length - 1) loadBtn.style.display = "none";
      }
      a = j;
    });
  }
};
xhr.send();
// ============================================== CODE FOR DISPLAYING CARD(AJAX) ENDS HERE
// ============================================== FILTER BUTTON STARTS HERE
let filterBtn = document.querySelectorAll(".filter-btn li a");
let filterList = document.querySelectorAll(".filter-btn li");
let displayCard = document.querySelector(".display-card");
let filterImage = document.querySelector(".filter-icon a img");

filterBtn.forEach(function (btn, index) {
  btn.addEventListener("click", function (e) {
    // REMOVING CLASS ACTIVE FROM ALL FILTER lINKS
    for (let i = 0; i < filterBtn.length; i++) filterBtn[i].classList.remove("active");

    if (e.currentTarget.classList.contains("two-column")) {
      displayCard.classList = "display-card two-card";
      e.currentTarget.classList.add("active")
      filterImage.src = "assets/images/2-column.png";
    } else if (e.currentTarget.classList.contains("three-column")) {
      displayCard.classList = "display-card three-card";
      e.currentTarget.classList.add("active")
      filterImage.src = "assets/images/3-column.png";
    } else if (e.currentTarget.classList.contains("four-column")) {
      displayCard.classList = "display-card four-card";
      filterImage.src = "assets/images/4-column.png";
      e.currentTarget.classList.add("active");
    } else {
      displayCard.classList = "display-card";
      filterImage.src = "assets/images/3-column.png";
    }
  });
});
// ============================================== FILTER BUTTON ENDS HERE
// ============================================== EMAIL VALIDATION OF MAILING SECTION STARTS HERE
let submitBtn = document.querySelector(".mailing .submit-btn");

// FUNCTION TO VALIDATE EMAIL
function validateEmail(input, emailVal) {
  let emailRegex = /^([_\.\-a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,5}$/;
  let inputBox = input.parentElement;

  let createdSpan = document.createElement("span");
  createdSpan.setAttribute("class", "error");
  let span = inputBox.querySelector(".error");

  //CODE TO DISPLAY ONLY SINGLE SPAN ON CLICK
  if (!inputBox.contains(span)) inputBox.appendChild(createdSpan);
  span = inputBox.querySelector("span");

  if (emailVal === "") {
    span.style.display = "block";
    span.style.color = "#e74c3c";
    span.textContent = "Email Cannot Be Empty";
  }
  else if (emailRegex.test(emailVal)) {
    span.textContent = "Thank You for Signing Up."
    span.style.display = "block";
    span.style.color = "#2ecc71";
    input.value = "";
    setTimeout(() => span.style.display = "none", 2000);
  } else {
    span.style.display = "block";
    span.style.color = "#e74c3c";
    span.textContent = "Please Enter Valid Email. Eg. abc@xyz.com";
  }
};

//ADDING EVENT LISTENER ON SUBMIT BUTTON 
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let input = document.getElementById("email-us");
  let emailVal = input.value.trim();
  validateEmail(input, emailVal);
});
// ============================================== EMAIL VALIDATION OF MAILING SECTION ENDS HERE