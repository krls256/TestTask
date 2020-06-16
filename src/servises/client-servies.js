export default class ClientServise {
    constructor() {
        this.getTocken = async () => {
        return await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(function(response) {
                return response.json();
            })
            .catch(function(error) {
            console.log(error)
            return null;
            });
        }
        this.getUsers = async (count = 6) => {
            return await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(data.success) {
                    return data
                } else {
                    return null;
                }
            }) 
            .catch(err => console.log(err)) 
            }
        this.getUser = async (id = 1) => {
            fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    if(data.success) {
                        console.log(data)
                        return data;
                    } else {
                        return null;
                    }
                })
                .catch(err => console.log(err))
        }
        this.getPositions = async () => {
            return await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
                .then(function(response) {
                return response.json();
                })
                .then(function(data) {
                    return data;
                })
                .catch(err => console.log(err))
        }
        this.postUser = async (formData, token) => {
            return await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
                method: 'POST',
                body: formData,
                headers: {
                    'Token': token, 
                },
                })
                .then(function(response) {
                return response.json();
                })
                .then(function(data) {
                if(data.success) {
                    return true
                } else {
                    return false
                }
                })
                .catch(function(error) {
                    console.log(error)
                });
        }
    }
    
}