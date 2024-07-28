function generateRandomString(length = 6, options = { lower: true, upper: true, numbers: true, special: false }) {
  let password = "";
  let characters = "";

  // Build the character set based on the options
  if (options.lower) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  
  if (options.upper) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  if (options.numbers) {
    characters += "0123456789";
  }
  
  if (options.special) {
    characters += "!@#$%^&*()-_=+[]{}|;:,.<>?/";
  }

  const charactersLength = characters.length;

  // Error handling if no characters are selected
  if (charactersLength === 0) {
    throw new Error("At least one character type must be selected.");
  }

  // Generate the random string
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Example usage:
console.log(generateRandomString()); // Default length 6 with all options enabled
console.log(generateRandomString(8)); // Length 8 with all options enabled
console.log(generateRandomString(12, { lower: true, upper: true, numbers: true, special: true })); // Custom length and options
console.log(generateRandomString(10, { lower: true, upper: false, numbers: true, special: false })); // Custom length with selected options
console.log(generateRandomString(10, { lower: false, upper: false, numbers: false, special: false })); // Check if error is working
