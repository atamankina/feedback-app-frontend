import { BACKEND_URL } from '../config';

export const createFeedback = async (feedback) => {
    const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    });
    return response.json().data;
}

export const getFeedback = async () => {
    const response = await fetch(BACKEND_URL);
    return response.json().data;
}

export const deleteFeedback = async (title) => {
    const response = await fetch(`${BACKEND_URL}/${title}`, {
        method: 'DELETE'
    });
    return response.json().message;
}