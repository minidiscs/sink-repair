const applicationState = {
	serviceRequests: []

}

const API = "http://localhost:8088"

export const fetchData = (endpoint) => {
    return fetch(`${API}/${endpoint}`)
        .then(response => response.json())
        .then(
            (data) => {
                // Store the external state in application state
                applicationState[endpoint] = data
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
			document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {

    return fetch(`${API}/serviceRequests/${id}`, { method: "DELETE" })
        .then(() => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            })
}
