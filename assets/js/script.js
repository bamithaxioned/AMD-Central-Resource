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