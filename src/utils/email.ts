import axios from "axios"

export async function sendEmailCallRequired(name: string, phone: string, subject: string, text: string = '') {
    const body = `
    <style>
        .btn-link {
        text-decoration: underline;
        color: #0069c2;
        }
        .title {
            margin-bottom: 10px;
        }
        .block {
            margin-bottom: 3px;
        }
    </style>
    <h3 class="title">${subject}</h3>
    <div class="block">Имя: ${name}</div>
    <div>Телефон: <a href="tel:${phone}">${phone}</a></div>
    <div>${text}</div>`

    const data = {
        subject: subject,
        body: body,
        msg_type: 'html'
    }

    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/v1/send_email`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        console.error(error)
    }
    return null
}


export async function sendEmailNeedHelp(name: string, email: string, msg: string) {
    const body = `
    <style>
        .btn-link {
        text-decoration: underline;
        color: #0069c2;
        }
        .title {
            margin-bottom: 10px;
        }
        .block {
            margin-bottom: 3px;
        }
    </style>
    <h3 class="title">Требуется поддержка.</h3>
    <div class="block">Имя: ${name}</div>
    <div class="block">Почта: ${email}</div>
    <div class="block">Сообщение: ${msg}</div>`

    const data = {
        subject: "Поддержка",
        body: body,
        msg_type: 'html'
    }

    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/v1/send_email`, data, {
            headers: {
                'Origin': 'https://www.leeblock.ru',  // Ensure the correct origin is set
                'Content-Type': 'application/json',  // Specify JSON content type
            }
        })
        return res
    } catch (error) {
        console.error(error)
    }
    return null
}
