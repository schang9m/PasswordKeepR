// Client facing scripts here
// Function to generate a random password
// Function to generate a random password
function generatePassword(length = 6, options = { lower: true, upper: true, numbers: true, special: true }) {
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

// jQuery document ready function
$(document).ready(() => {
  $('#generateButton').click(() => {
    // Get form values
    const length = parseInt($('#length').val(), 10);
    const lower = $('#lowercase').is(':checked');
    const upper = $('#uppercase').is(':checked');
    const numbers = $('#number').is(':checked');
    const special = $('#special').is(':checked');

    // Validate length input
    if (isNaN(length)) {
      $('#passwordOutput').text('Error: Length must be a number.');
      return;
    }
    if (length < 4) {
      $('#passwordOutput').text('Error: Length must be at least 4.');
      return;
    }

    // Generate the password
    try {
      const password = generatePassword(length, { lower, upper, numbers, special });
      $('#passwordOutput').val(password);
    } catch (error) {
      $('#passwordOutput').val(`Error: ${error.message}`);
    }
  });

  // Copy password to clipboard
  $('#copyButton').click(() => {
    try {
      const password = $('#passwordOutput').val();
      navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    } catch (err) {
      alert('Failed to copy password.');
    }
  });
});
