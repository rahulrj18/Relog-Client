export function tokenHeader() {
    const token = localStorage.getItem('token');
    return token
        ? {
            headers: {Authorization: `JWT ${token}`}
        }
        : {};
}

 