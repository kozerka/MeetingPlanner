const API_URL = 'http://localhost:3005/meetings';

export const fetchMeetings = (setState) => {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch meetings.');
            return response.json();
        })
        .then(data => setState({ meetings: data }))
        .catch(error => console.error("Error:", error));
};

export const addMeeting = (meeting, setState, prevState) => {
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(meeting),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to add meeting.');
            return response.json();
        })
        .then(data => setState({
            meetings: [...prevState.meetings, data]
        }))
        .catch(error => console.error("Error:", error));
};

export const deleteMeeting = (meetingId, setState, prevState) => {
    fetch(`${API_URL}/${meetingId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to delete meeting.');
            setState({
                meetings: prevState.meetings.filter(meeting => meeting.id !== meetingId)
            });
        })
        .catch(error => console.error("Error:", error));
};