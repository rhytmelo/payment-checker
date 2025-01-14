/**
* Copyright (c) 2024, Rhytmelo Designs Agency. All rights reserved.
*
* This software is proprietary to Rhytmelo Designs Agency. No rights are granted to use, 
* download, copy, modify, distribute, or otherwise exploit this software in any form, 
* except as expressly authorized in writing by Rhytmelo Designs Agency.
*
* Unauthorized use of this software or any part thereof is strictly prohibited. Any 
* violations may result in legal action under applicable laws.
*
* THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
* PURPOSE, OR NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
* FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR 
* OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
* DEALINGS IN THE SOFTWARE.
*/

  document.addEventListener('DOMContentLoaded', () => {
    const checkerId = 'flexi-checker';
    const bannerId = 'flexi-embed-banner';
    const paymentURL = "https://defaulter.rhytmelo.com/";
    const contactURL = "https://rhytmelo.com/contact-us";
    const paymentDone = false; // This is automatically using fetch request 
    const paymentDueDate = new Date('2024-10-06'); // Do not hardcode-this is automatically set with JSON body xcvv.json
    
    const MS_PER_DAY = 1000 * 3600 * 24; // converting milliseconds in a day
    const now = new Date();
    const daysDifference = Math.floor((now - paymentDueDate) / MS_PER_DAY);
    const hundredDaysPassed = daysDifference >= 100;
    const futureDate = daysDifference < 0;

    
    const displayBanner = () => {
        const flexiBanner = document.getElementById(bannerId);
        if (flexiBanner) {
            flexiBanner.style.display = 'block';
        }
    };

  
    const handlePaymentCheck = () => {
        if (paymentDone) {
            console.log("All payments have been received. There are no outstanding dues. Thank you!");
        } else if (futureDate) {
            console.log(`The payment due date is still in the future (${Math.abs(daysDifference)} days to go). Pay now and enjoy a 5% discount! For details, visit: ${paymentURL}`);
        } else if (!hundredDaysPassed) {
            console.warn(`Hi JBH EXPORTS LLP, ${daysDifference} days have passed since the due date for your bill (RDA-UP/23-24/0003), and the payment remains pending. Kindly make the payment immediately to avoid further action. Please note: If the payment is not cleared by the 100th day, a payment reminder banner will be displayed. For more details, visit: ${paymentURL}`);
        } else {
            const checker = document.getElementById(checkerId);
            if (!checker) {
                console.error(`The payment for your bill RDA-UP/23-24/0003 has been overdue by ${daysDifference} days. A defaulter payment banner reminder is now displayed. If you believe this is an error, please contact us at: ${contactURL}`);
                //displayBanner(); //Removing display banner will require level A permisions. Mail Chain should be attached in JIRA and Jira Number should be mentioned belwo:
                // JIRA Number: EA-12084
            }
        }
    };

    // Periodic payment checks every 2 seconds
    setInterval(() => {
        console.log("Checking payment status for RHYTMELO DESIGNS...");
        handlePaymentCheck();
    }, 2000);
});
