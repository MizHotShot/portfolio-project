// Function to calculate age based on birthdate
function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    
    return age;
}

// Set my birthdate
const birthDate = "1998-04-22";

// Get the span element
const ageElement = document.getElementById("age");

// Calculate and update age
const age = calculateAge(birthDate);
ageElement.textContent = age;