// 1. jsonplaceholder tasks
// 1.1 Get all users

fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response);
        return response.json;
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('error', error);
    });

// 1.2 Print only the name and the username from the retrieved data

//1.3 On some user, update it's data
let user = {
    "id": 10,
    "name": "Dimitar Milkov",
    "username": "Dimitar.Milkov",
    "email": 'dimemilkov1@gmail.com',
    "address": {
        "street": "Resavska 19",
        "suite": "Suite 195",
        "city": "Kavadarci",
        "zipcode": "1430",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "076 375 380",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
}
fetch('https://jsonplaceholder.typicode.com/users/10', {
    method: 'PUT',
    body: JSON.stringify({
        body:user
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    return response.json();
})
.then(data => {
    console.log('put');
    console.log(data);
})
.catch(eroor => {
    console.error('error', error);
});

//1.4 Add new user
let newUser = {
    "id": 11,
    "name": "Trajana Ana Milkova",
    "username": "Taci_M",
    "email": "trajanaanamilkova@gmail.com",
    "address": {
        "street": "Pionerska 5",
        "suite": "Suite 197",
        "city": "Kavadarci",
        "zipcode": "1430",
        "geo": {
            "lat": "-38,2386",
            "lng": "57.2232"
        }
    },
    "phone": "071 522 699",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
}
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify ({
        body: newUser
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    return response.json();
})
.then(data => {
    console.log('post');
    console.log(data);
})
.catch(error => {
    console.error('error', error);
});


//1.5 Delete a user 
fetch ('https://jsonplaceholder.typicode.com/users/11', {
    method: 'DELETE'
})
.then(response => {
    return response.json();
})
.then(data => {
    console.log('delete');
    console.log(data);
})
.catch(error => {
    console.error('error', error);
}); 

// BONUS 

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('error', error);
    });
