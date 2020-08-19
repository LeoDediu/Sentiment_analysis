async function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value;
    console.log(formText);

    fetch('http://localhost:8081/meaning', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: formText})
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
    });

    // const api_response = await fetch("http://localhost:8081/meaning", {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify(formText),
    // })
    // try {
    //     const data = await api_response.json();
    //     console.log(data);
    //     const newElement = document.createElement('div');
    //     newElement.innerHTML = `<div>${data}</div>`;
    //     document.getElementById('results').appendChild(newElement);
    // } catch (error) {
    //     console.log('error', error);
    // }

}

export { handleSubmit }


// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8080/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }