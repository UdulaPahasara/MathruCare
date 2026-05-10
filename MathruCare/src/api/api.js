const API_BASE_URL = 'http://localhost:8081/api/v1';

export const api = {
    async post(endpoint, data) {
        const token = localStorage.getItem('token');
        const isPublicEndpoint = endpoint.includes('/auth/');
        const headers = {
            'Content-Type': 'application/json',
        };

        if (token && token !== 'null' && token !== 'undefined' && !isPublicEndpoint) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });

        const contentType = response.headers.get('content-type');
        let responseData;

        if (contentType && contentType.includes('application/json')) {
            responseData = await response.json();
        } else {
            responseData = await response.text();
        }

        if (!response.ok) {
            const message = (typeof responseData === 'object' && responseData.message)
                ? responseData.message
                : (typeof responseData === 'string' && responseData.length > 0)
                    ? responseData
                    : `API request failed with status ${response.status}`;
            throw new Error(message);
        }

        return responseData;
    }
};
