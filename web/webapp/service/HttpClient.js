sap.ui.define([
], function () {
	"use strict";

	return {
		async get(url) {
            return this.doRequest(url, {
                method: "get",
                mode: "cors"
            })
        },

        async doRequest(url, requestContent){
            return fetch(url, requestContent)
                .then((response) => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw new Error(response.status.toString());
                    }
                })
                .then((body) => {
                    // needed to handle 200 responses with no body
                    return (body == null || body === "") ? true : JSON.parse(body);
                })
                .catch((error) => {
                    console.error("Request failed", error);
                    throw new Error(error)
                });
        }

	};
});