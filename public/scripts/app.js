// Client facing scripts here
// Function to generate a random password
export function generatePassword(length = 6, options = { lower: true, upper: true, numbers: true, special: false }) {
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

// Client-side script to handle form interactions
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generateButton').addEventListener('click', () => {
    // Get form values
    const length = parseInt(document.getElementById('length').value, 10);
    const lower = document.getElementById('lowercase').checked;
    const upper = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('number').checked;
    const special = document.getElementById('special').checked;

    // Validate length input
    if (isNaN(length) || length < 4) {
      document.getElementById('passwordOutput').textContent = 'Error: Length must be a number greater than or equal to 4.';
      return;
    }

    // Generate the password
    try {
      const password = generatePassword(length, { lower, upper, numbers, special });
      document.getElementById('passwordOutput').value = password;
    } catch (error) {
      document.getElementById('passwordOutput').value = `Error: ${error.message}`;
    }
  });
});

//copying the password
document.getElementById('copyButton').addEventListener('click', () => {
  const passwordCopy = document.getElementById('passwordOutput');
  passwordCopy.select(); // Select the text
  document.execCommand('copy'); // Copy the text
  alert('Password copied to clipboard!');
});