import nodemailer from 'nodemailer';

const EMAIL_FROM_USERNAME = process.env.EMAIL_FROM_USERNAME
const EMAIL_FROM_PWD = process.env.EMAIL_FROM_PWD

function getTransporter() {
    if (!EMAIL_FROM_USERNAME || !EMAIL_FROM_PWD) {
        return
    }
    let transporter = nodemailer.createTransport({
        service: 'gmail', // you can use different email service providers here
        auth: {
            user: EMAIL_FROM_USERNAME, // your email
            pass: EMAIL_FROM_PWD, // your email password or app password
        },
    });

    return transporter
}

export async function sendEmailCallRequired(email: string, name: string, phone: string) {
    let transporter = getTransporter()
    if (!transporter) return

    // Send the email
    try {
        await transporter.sendMail({
            from: EMAIL_FROM_USERNAME, // sender address
            to: 'info@leeblock.ru', // list of receivers
            subject: 'Обратня связь', // Subject line
            text: '', // plain text body
            html: `
            <style>
                .btn-link {
                text-decoration: underline;
                color: #0069c2;
                }
                .title {
                    margin-bottom: 5px;
                }
                .block {
                    margin-bottom: 3px;
                }
            </style>
            <h3 class="title">Запрос на обратный звонок.</h3>
            <div class="block">Имя: ${name}</div>
            <div>Телефон: <a href="tel:${phone}">${phone}</a></div>`,
        });
    } catch (error) {
        console.error(error)
    }
}
