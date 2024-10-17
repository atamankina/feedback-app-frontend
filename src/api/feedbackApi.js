import { BACKEND_URL } from '../config';

export const createFeedback = async (feedback) => {
    const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    });
    const result = await response.json();
    return result.data;
}

export const getFeedback = async () => {
    const response = await fetch(BACKEND_URL);
    const result = await response.json();
    return result.data;
}

export const deleteFeedback = async (title) => {
    const response = await fetch(`${BACKEND_URL}/${title}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    return result.message;
}