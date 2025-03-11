import axios from "axios";

export async function postLogin(email: string, password: string) {
    try {
        // Create FormData object
        const formData = new FormData();
        formData.append("username", email);
        formData.append("password", password);

        // Send the request with form data
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/users/login`, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Set the Content-Type for form data
            },
        });

        return res;
    } catch (error) {
        console.error("Login error:", error);
    }
    return null;
}


export async function postSignup(
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    phone: string
) {
    let res = null

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("phone", phone);
    try {
        res = await axios.post(`${process.env.REACT_APP_BACKEND}/users/`, formData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error status:", error.response.status);
                console.error("Error data:", error.response.data);
                return error.response;
            }
        }
    }
    return res;
}


export async function updateUser(firstName: string, lastName: string, phone: string) {
    let res = null

    try {
        res = await axios.patch(`${process.env.REACT_APP_BACKEND}/users/`, {
            first_name: firstName,
            last_name: lastName,
            phone: phone
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`,
            }
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error status:", error.response.status);
                console.error("Error data:", error.response.data);
                return error.response;
            }
        }
    }
    return res;
}


export async function sendVerification() {
    let res = null

    try {
        res = await axios.post(`${process.env.REACT_APP_BACKEND}/users/send-verification-email`, {
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`,
            }
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error status:", error.response.status);
                console.error("Error data:", error.response.data);
                return error.response;
            }
        }
    }
    return res;
}


export async function getUsers() {
    let res = null

    try {
        res = await axios.get(`${process.env.REACT_APP_BACKEND}/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`,
            }
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error status:", error.response.status);
                console.error("Error data:", error.response.data);
                return error.response;
            }
        }
    }
    return res;
}


export async function getPromocodes() {
    let res = null

    try {
        res = await axios.get(`${process.env.REACT_APP_BACKEND}/promo/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`,
            }
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error status:", error.response.status);
                console.error("Error data:", error.response.data);
                return error.response;
            }
        }
    }
    return res;
}

export async function createPromocodes(code: string) {
    let res = null

    try {
        res = await axios.post(`${process.env.REACT_APP_BACKEND}/promo/`, {
            code: code
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`,
            }
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error status:", error.response.status);
                console.error("Error data:", error.response.data);
                return error.response;
            }
        }
    }
    return res;
}

export async function deletePromocodes() {
    let res = null

    try {
        res = await axios.delete(`${process.env.REACT_APP_BACKEND}/promo/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`,
            }
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error status:", error.response.status);
                console.error("Error data:", error.response.data);
                return error.response;
            }
        }
    }
    return res;
}