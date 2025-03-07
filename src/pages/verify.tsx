import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Verify = () => {
    const { token } = useParams();
    const navigate = useNavigate()
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const fetchHtml = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/verify-email/${token}`);
                const html = await response.text();
                setHtmlContent(html);
            } catch (error) {
                console.error('Error fetching HTML:', error);
            }
        };

        fetchHtml();

        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, []);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
}

export default Verify