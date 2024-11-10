import {partcipantTemplate, successTemplate} from './Templates.js';


let participantCount = 1;


document.getElementById("add").addEventListener("click", function() {
    participantCount++;
    const newParticipantHTML = partcipantTemplate(participantCount);

    const addButton = document.getElementById("add");
    addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
});



function totalFees(){
    let feeElements = [...document.querySelectorAll("[id^=fee]")];
    let total = feeElements.reduce((sum, feeInput) => sum + Number(feeInput.value || 0), 0);
    return total;
}   



function submitForm(event){
    event.preventDefault();
    const total = totalFees();
    const adultName = document.querySelector("#adult_name").value;
    const participantCount = document.querySelectorAll("[class^=participant]").length;

    const summary = successTemplate({
        adultName, 
        participantCount, 
        totalFees: total,
    });
    
    document. querySelector("form").style.display = "none";

    const summaryElement = document.querySelector("#summary");
    summaryElement.innerHTML = `<p>${summary}</p>`;
    summaryElement.style.display = "block";
}   



document.querySelector("form").addEventListener("submit", submitForm);