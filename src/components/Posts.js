import { useNavigate, useParams } from 'react-router-dom';

export default function Posts() {
    const history = useNavigate();
    console.log(history);
    const { category, topic } = useParams();
    return (
        <div>
            <div>
                This is the posts page - {category} / {topic}
            </div>
        </div>
    );
}
