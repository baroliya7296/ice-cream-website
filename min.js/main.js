  // ************** ice cream loader *************

window.addEventListener("load", function() {
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 3000); // 3 seconds
});
// **************** navbar togglebar *************

function toggleNavbar() {
  const navbar = document.getElementById('navbar');

  if (navbar.style.display === 'none' || navbar.style.display === '') {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
  }
}

// -***********product botton***********

const button = document.getElementById('button');
const productInfo = document.getElementById('product-info');

button.addEventListener('click',() => {
  if(productInfo.style.display === 'none' || productInfo.style.display === '') {
     productInfo.style.display = 'block';
  } else{
      productInfo.style.display = 'none';
  }
});


// function toggleDetails() {
//     const showDetails = document.getElementById('more-details');
//     const button = document.querySelector('moreDetails');

//     if (showDetails.style.display === 'none' || showDetails.style.display === '') {
//       showDetails.style.display = 'block';
//       moreDetails.textContent = 'Hide details';
//     } else {
//       showDetails.style.display = 'none';
//       moreDetails.textContent = 'Read More...';
//     }
//   }


  function toggleProduct() {
    const showDetails = document.getElementById('read-more');
    const button = document.querySelector('showproduct');

    if (showDetails.style.display === 'none' || showDetails.style.display === '') {
      showDetails.style.display = 'grid';
      showproduct.textContent = 'Hide Product';
    } else {
      showDetails.style.display = 'none';
      showproduct.textContent = 'Show More Product...';
    }
  }

  // // *******************get selected image details***************

  function kholoNayaPage(image, title, description) {
    const params = new URLSearchParams({
      img: image,
      title: title,
      desc: description
    });

    // Open details page in a new tab or window
    window.open('details.html?' + params.toString(), '_blank');
  }


  function showSuccessDialog() {
    const dialog = document.getElementById("dialogBox");
    dialog.style.display = "block";

    // Auto-hide after 3 seconds (3000 ms)
    setTimeout(() => {
      dialog.style.display = "none";
    }, 3000);
  }


  function addToCart(name, price, image) {
    const params = new URLSearchParams({
      item: name,
      price: price,
      img: image
    });

    // Open new cart page with product info
    window.open('cart.html?' + params.toString(), '_blank');
  }
