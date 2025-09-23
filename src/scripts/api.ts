import type { FormFields } from "../types";

const API_URL = "https://craftserve.zendesk.com/api/v2/requests.json"

export const sendTicket = async (data: FormFields) => {
    try{
        const request = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "request": {
                    "requester": {
                        "name": `${data.name} ${data.surname}`,
                        "email": `${data.email}`
                    },
                    "subject": `[AGENCY] ${data.subject}`,
                    "comment": {
                        "body": `
                        Firma: ${data.company}\n
                        Numer telefonu kontaktowego: ${data.phone}\n
                        Treść: ${data.content}
                        `
                    },
                    "tags": ["agency", "contact_form"]
                }
            })
        })

        const response = await request.json();
        
        return response;
    }catch(err){
        console.warn(err);
        return "Error has occured while creating ticket";
    }
}