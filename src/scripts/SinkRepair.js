import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="service--form">
    <h2>New Service Request</h2>
        ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `
}

