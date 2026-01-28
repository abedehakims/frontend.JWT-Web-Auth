export const authAPI = {
    // This login needs the credential of the user (email and password)
    api_login: async (credentials) => {
        return fetch("/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Need JSON send for the credentials
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                // Catch error if the backend system at the userModel getting wrong
                return { error };
            });
    },
    api_signup: async (credentials) => {
        return fetch("/api/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                return { error };
            });
    },
};