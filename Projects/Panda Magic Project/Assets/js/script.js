// ================= Variables ==================================

var navLinks = document.querySelectorAll(".navLink");

// ==============================================================


// Setting "Active" Section
for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", function() {
		navLinks[0].classList.remove("active");
		navLinks[1].classList.remove("active");	
		navLinks[2].classList.remove("active");
		navLinks[3].classList.remove("active");		
		navLinks[4].classList.remove("active");	
		
		if(this.id === "logo") {
			navLinks[1].classList.add("active");	
		} else {
			this.classList.add("active");
		}
	});
}


