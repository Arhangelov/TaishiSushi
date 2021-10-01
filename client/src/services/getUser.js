export const getUser = () => {
    return fetch('/auth/isAuthenticated')
        .then(res => res.json())
        .then(data => data)
}