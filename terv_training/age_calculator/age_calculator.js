function calculateBirthYear() {
    const age = Number(document.getElementById("age").value);
    if (isNaN(age) || age < 0) 
    {
        document.getElementById("result").innerText = "Please enter a valid age.";
    }
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    document.getElementById("result").innerText = "Your birth year is: " + birthYear;
}