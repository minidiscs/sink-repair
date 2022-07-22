const applicationState = {
	serviceRequests: []

}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/serviceRequests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.serviceRequests = serviceRequests
            }
        )
}

export const getRequests = () => {
    return applicationState.serviceRequests.map(singleServiceRequest => ({...singleServiceRequest}))
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/serviceRequests`, fetchOptions)
        .then(response => response.json())
        .then(() => {

        })
}
