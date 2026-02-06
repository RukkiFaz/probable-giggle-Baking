document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = []; // Initialize an empty cart array

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.previousElementSibling.innerText;
            cart.push(productName); // Add the product to the cart array
            alert(`${productName} has been added to your cart!`);
            console.log(cart); // Display the cart contents in the console (for testing)
        });
    });
});


document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  }
  document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  }



  
  