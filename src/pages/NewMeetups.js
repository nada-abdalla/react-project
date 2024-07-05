import {useNavigate} from 'react-router-dom'

import NewMeetupForm from '../components/meetups/newMeetupForm'

function NewMeetupsPage(){
    const navigate = useNavigate();

    function addMeetupHandeler(MeetupDate){
        fetch('https://react-getting-started-e29a9-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(MeetupDate),
                headers: {
                    'content-type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', { replace: true });
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup ={addMeetupHandeler} />
        </section>
    )
}

export default NewMeetupsPage;