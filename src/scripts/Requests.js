import { getRequests } from "./dataAccess.js"

const requestsHTML = (request) => {
    return `
        <li id="request-${request.id}">
            <div class="requests--title">
                Request - ${request.id}: ${request.address}
            </div>
        </li>
        <li>
            Description: ${request.description}
        </li>
        <li>
            Budget: $${request.budget}.00
        </li>
        <li>
            Needed By: ${request.neededBy}
        </li>
        <br>
       `
}

export const Requests = () => {
    const serviceRequests = getRequests()

    let html = `
        <ul>
            ${serviceRequests.map(request => requestsHTML(request)).join("")}
        </ul>
    `

    return html
}
