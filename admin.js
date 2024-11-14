function createCountdown(containerId, targetDate) {

    var countdownInterval = setInterval(function () {
      var now = new Date().getTime();
      if (now >= targetDate) {
        // Countdown has reached zero
        clearInterval(countdownInterval); // Stop this timer
  
        // Remove the product container from the current page
        var container = document.getElementById(containerId);
        container.parentNode.removeChild(container);
  
        // Add the removed product container to another HTML page (if needed)
        var destinationPage = document.getElementById("destinationPage"); // Adjust the destination page's ID
        destinationPage.appendChild(container);
      }
    }, 1000); // Check every second
  }
  
  // Function to add a new product with a countdown timer
  function addProduct(productData) {
    var productContainer = document.createElement("div");
    productContainer.id = productData.id; // Assign a unique ID to the product container
    // Create the product container with details, image, etc.
    // ...
  
    // Calculate the target date for the product's timer based on productData
    var targetDate = new Date(productData.targetDate).getTime();
  
    // Create a countdown timer for this product
    createCountdown(productContainer.id, targetDate);
  
    // Add the product container to the page
    var productList = document.getElementById("productList"); // Adjust the product list's ID
    productList.appendChild(productContainer);
  }
  
  // Usage example:
  addProduct({
    id: "product1",
    targetDate: "August 20, 2023 21:45:00",
    // Other product data
  });
  
  addProduct({
    id: "product2",
    targetDate: "Some other date and time",
    // Other product data
  });