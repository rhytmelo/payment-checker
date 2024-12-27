// // Hosting the script externally and serving it via HTTPS.

// export function handlePaymentCheck() {
//   document.addEventListener('DOMContentLoaded', () => {
//     const checkerId = 'flexi-checker';
//     const bannerId = 'flexi-embed-banner';
//     const paymentURL = "https://rhytmelo.com/defaulter-payment";
//     const contactURL = "https://rhytmelo.com/contact-us";
//     const paymentDone = false; // Set based on your payment logic
//     const paymentDueDate = new Date('2024-10-06'); // Replace with the actual due date
    
//     const MS_PER_DAY = 1000 * 3600 * 24; // Milliseconds in a day
//     const now = new Date();
//     const daysDifference = Math.floor((now - paymentDueDate) / MS_PER_DAY);
//     const hundredDaysPassed = daysDifference >= 100;
//     const futureDate = daysDifference < 0;

//     // Function to display the banner
//     const displayBanner = () => {
//         const flexiBanner = document.getElementById(bannerId);
//         if (flexiBanner) {
//             flexiBanner.style.display = 'block';
//         }
//     };

//     // Function to handle payment status
//     const handlePaymentCheck = () => {
//         if (paymentDone) {
//             console.log("All payments have been received. There are no outstanding dues. Thank you!");
//         } else if (futureDate) {
//             console.log(`The payment due date is still in the future (${Math.abs(daysDifference)} days to go). Pay now and enjoy a 5% discount! For details, visit: ${paymentURL}`);
//         } else if (!hundredDaysPassed) {
//             console.warn(`Hi JBH EXPORTS LLP, ${daysDifference} days have passed since the due date for your bill (RDA-UP/23-24/0003), and the payment remains pending. Kindly make the payment immediately to avoid further action. Please note: If the payment is not cleared by the 100th day, a payment reminder banner will be displayed. For more details, visit: ${paymentURL}`);
//         } else {
//             const checker = document.getElementById(checkerId);
//             if (!checker) {
//                 console.error(`The payment for your bill RDA-UP/23-24/0003 has been overdue by ${daysDifference} days. A defaulter payment banner reminder is now displayed. If you believe this is an error, please contact us at: ${contactURL}`);
//                 displayBanner(); //Removing display banner will require level A permisions. Mail Chain should be attached in JIRA and Jira Number should be mentioned belwo:
//                 // JIRA Number: EA-12084
//             }
//         }
//     };

//     // Periodic payment checks every 2 seconds
//     setInterval(() => {
//         console.log("Checking payment status for RHYTMELO DESIGNS...");
//         handlePaymentCheck();
//     }, 2000);
// });


  
// }




// Hosting the script externally and serving it via HTTPS.

export function handlePaymentCheck() {
  document.addEventListener('DOMContentLoaded', () => {
    const checkerId = 'flexi-checker';
    const bannerId = 'flexi-embed-banner';
    const paymentURL = "https://rhytmelo.com/defaulter-payment";
    const contactURL = "https://rhytmelo.com/contact-us";
    const paymentDone = false; // Set based on your payment logic
    const paymentDueDate = new Date('2024-10-06'); // Replace with the actual due date
    
    const MS_PER_DAY = 1000 * 3600 * 24; // Milliseconds in a day
    const now = new Date();
    const daysDifference = Math.floor((now - paymentDueDate) / MS_PER_DAY);
    const hundredDaysPassed = daysDifference >= 100;
    const futureDate = daysDifference < 0;

    // Function to display the banner
    const displayBanner = () => {
      const flexiBanner = document.getElementById(bannerId);
      if (flexiBanner) {
        flexiBanner.style.display = 'block';
      }
    };

    // Function to handle payment status
    const checkPaymentStatus = () => {
      if (paymentDone) {
        console.log("All payments have been received. There are no outstanding dues. Thank you!");
      } else if (futureDate) {
        console.log(`The payment due date is still in the future (${Math.abs(daysDifference)} days to go). Pay now and enjoy a 5% discount! For details, visit: ${paymentURL}`);
      } else if (daysDifference < 100) {
        console.warn(`Hi JBH EXPORTS LLP, ${daysDifference} days have passed since the due date for your bill (RDA-UP/23-24/0003), and the payment remains pending. Kindly make the payment immediately to avoid further action. Please note: If the payment is not cleared by the 100th day, a payment reminder banner will be displayed. For more details, visit: ${paymentURL}`);
      } else {
        const checker = document.getElementById(checkerId);
        if (!checker) {
          console.error(`The payment for your bill RDA-UP/23-24/0003 has been overdue by ${daysDifference} days. A defaulter payment banner reminder is now displayed. If you believe this is an error, please contact us at: ${contactURL}`);
          displayBanner(); // Removing display banner will require level A permissions. Mail Chain should be attached in JIRA and Jira Number should be mentioned below:
          // JIRA Number: EA-12084
        }
      }
    };

    // Periodic payment checks every 2 seconds
    setInterval(() => {
      console.log("Checking payment status for RHYTMELO DESIGNS...");
      checkPaymentStatus();
    }, 2000);
  });
}
