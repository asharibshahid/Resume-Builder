"use strict";
// @ts-ignore
var form = document.getElementById("resumeForm");

// Function to handle form submission
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    
    // Get form input values
    var name = document.getElementById("name").value;
    var role = document.getElementById("role").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var profile = document.getElementById("profile").value;
    var college = document.getElementById("college").value;
    var group = document.getElementById("group").value;
    var startYear = document.getElementById("startYear").value;
    var endYear = document.getElementById("endYear").value;
    var skills = document.getElementById("skills").value.split(",").map(skill => skill.trim()); // Ensure skills are trimmed
    var company = document.getElementById("company").value;
    var workYear = document.getElementById("workYear").value;
    var roleTitle = document.getElementById("roleTitle").value;
    var workDescription = document.getElementById("description").value;
    var languages = document.getElementById("languages").value.split(",").map(lang => lang.trim()); // Ensure languages are trimmed

    // Handle profile picture
    var profilePicture = (_a = document.getElementById("profilePicture").files) === null || _a === void 0 ? void 0 : _a[0];
    var displayProfileImage = document.getElementById("displayProfileImage");
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function (event) {
            if (event.target) {
                displayProfileImage.src = event.target.result;
                displayProfileImage.style.display = "block";
            }
        };
        reader.readAsDataURL(profilePicture);
    } else {
        displayProfileImage.style.display = "none";
    }

    // Add values to resume display
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayRole").textContent = role;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayAddress").textContent = address;
    document.getElementById("displayProfile").textContent = profile;
    document.getElementById("displayCollege").textContent = college;
    document.getElementById("displayGroup").textContent = group;
    document.getElementById("displayStartYear").textContent = startYear;
    document.getElementById("displayEndYear").textContent = endYear;

    // Display skills as a list (Moved this block here)
    var skillsList = document.getElementById("displaySkills");
    skillsList.innerHTML = ""; // Clear previous entries
    skills.forEach(function (skill) {
        if (skill) {
            var skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        }
    });

    // Display work experience
    document.getElementById("displayCompany").textContent = company;
    document.getElementById("displayWorkYear").textContent = workYear;
    document.getElementById("displayRoleTitle").textContent = roleTitle;
    document.getElementById("displayWorkDescription").textContent = workDescription;

    // Display languages as a list
    var languagesList = document.getElementById("displayLanguages");
    languagesList.innerHTML = ""; // Clear previous entries
    languages.forEach(function (language) {
        if (language) {
            var languageItem = document.createElement("li");
            languageItem.textContent = language;
            languagesList.appendChild(languageItem);
        }
    });
});

// Add Download PDF button functionality
var loadButton = document.getElementById("downloadBtn");
loadButton.addEventListener("click", function () {
    window.print();
});
