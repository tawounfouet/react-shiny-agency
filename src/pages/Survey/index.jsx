import { Outlet, Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'
 
function Survey() {
    const { questionNumber } = useParams()
 
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <Link to="client">Questionnaire Client</Link>
            <Link to="freelance">Questionnaire Freelance</Link>
            <Outlet />
        </div>
    )
}
export default Survey