var stripe = Stripe(import.meta.env.VITE_STRIPE_KEY);
var elements = stripe.elements();
const card = elements.create("card");
card.mount("#card-element");

// Handle form submission
var form = document.getElementById("payment-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    stripe.createToken(card).then(function (result) {
        if (result.error) {
            // Inform the user if there was an error.
            alert(result.error.message);
        } else {
            // Send the token to your server.
            stripeTokenHandler(result.token);
        }
    });
});

function stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById("payment-form");
    var hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("name", "stripeToken");
    hiddenInput.setAttribute("value", token.id);
    form.appendChild(hiddenInput);

    // Submit the form
    form.submit();
}
