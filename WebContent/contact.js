window.onload = function() {
	document.getElementById("contactForm").style.display = "none";

	function Contact(name, email, phone, address, birthday /* ,isNew, index */) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.birthday = birthday;
		// this.index = index;
	}

	function getEventTarget(e) {
		e = e || window.event;
		return e.target.id;
	}
	var contactArray = new Array();

	var currentIndex;

	var ul = document.getElementById("contactList");
	ul.onclick = function(event) {
		var targetId = getEventTarget(event);
		currentIndex = targetId;
		// alert(targetId);

		openContactForm(contactArray[targetId]);
	};

	function openContactForm(contact) {
		var contactForm = document.getElementById("contactForm");

		// alert(contact.name);

		document.getElementById("nameInput").value = contact.name;

		document.getElementById("emailInput").value = contact.email;

		document.getElementById("phoneInput").value = contact.phone;

		document.getElementById("addressInput").value = contact.address;

		document.getElementById("birthdayInput").value = contact.birthday;

		contactForm.style.display = "block";

	}

	var addContactButton = document.getElementById("addContactButton");
	addContactButton.onclick = function() {

		document.getElementById("contactForm").style.display = "block";

	};

	var deleteContactButton = document.getElementById("deleteContactButton");
	deleteContactButton.onclick = function() {
		var listOpen = document.getElementById("contactForm").style.display == "block";

		if (listOpen) {
			var shouldDelete = window
					.confirm("Are you sure you want to delete "
							+ document.getElementById("nameInput").value + "?");
			if (shouldDelete) {

				contactArray.splice(currentIndex, 1);
				var li = document.getElementById(currentIndex);
				li.parentNode.removeChild(li);
				for (i = contactArray.length; i > currentIndex; i--) {
					alert("i=" + i);

					document.getElementById(i).id = i - 1;
				}

			}
			document.getElementById("contactForm").reset();
			document.getElementById("contactForm").style.display = "none";
			if (contactArray.length == 0) {
				currentIndex = undefined;
			}
		} else {
alert("Please open a specific contact to delete.")
		}
		

	}

	var addButton = document.getElementById("addButton");
	addButton.onclick = function() {

		var name = document.getElementById("nameInput").value;

		if (name != "" && name != undefined) {

			var email = document.getElementById("emailInput").value;
			var phone = document.getElementById("phoneInput").value;
			var address = document.getElementById("addressInput").value;
			var birthday = document.getElementById("birthdayInput").value;

			var isUndefined = false;

			if (currentIndex == undefined) {
				currentIndex = contactArray.length;
				isUndefined = true;
			}

			contact = new Contact(name, email, phone, address, birthday);

			contactArray[currentIndex] = new Contact(name, email, phone,
					address, birthday/* , contactArray.length */);

			if (isUndefined) {
				var li = document.createElement("li");

				var idName = (ul.childNodes.length) - 1;

				li.id = idName;

				li.innerHTML =  "<img src=\"images/icons/ProfileIcon.png\">" + name;
				ul.appendChild(li);
			
			} else {

				document.getElementById(currentIndex).innerHTML =  "<img src=\"images/icons/ProfileIcon.png\">" + name;
			}
			document.getElementById("contactForm").reset();
			document.getElementById("contactForm").style.display = "none";

		} else {
			alert("Please type in the name of the contact.")
		}

		currentIndex = undefined;

	};

	var cancelButton = document.getElementById("cancelButton");
	cancelButton.onclick = function() {
		document.getElementById("contactForm").reset();
		document.getElementById("contactForm").style.display = "none";

	};
}