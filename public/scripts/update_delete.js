$(document).ready(() => {
  // Check the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const updateParam = urlParams.get('update');
  const deleteParam = urlParams.get('delete');

  if (updateParam === "success") {
    // Show update message
    $('#update').addClass('show'); // Apply 'show' class
    
    // Optionally, hide the message after a few seconds
    setTimeout(() => {
      $('#update').removeClass('show'); // Revert to hidden state
      // window.location.href = "http://localhost:8080/passwords";
      history.replaceState(null, "", "http://localhost:8080/passwords")
    }, 3000); // Hide after 3 seconds
  }
  if (deleteParam === "success") {
    // Show delete message
    $('#delete').addClass('show'); // Apply 'show' class
    
    // Optionally, hide the message after a few seconds
    setTimeout(() => {
      $('#delete').removeClass('show'); // Revert to hidden state
      history.replaceState(null, "", "http://localhost:8080/passwords")
    }, 3000); // Hide after 3 seconds
  }
});