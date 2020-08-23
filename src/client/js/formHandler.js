async function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById('name').value;
    if (!Client.checkForText(formText))
        return;
    const api_response = await fetch("http://localhost:8081/meaning", {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: formText}),
    })
    try {
        const data = await api_response.json();
        console.log(data);
        document.getElementById('res_goes_here').innerHTML = "";
        const newElement = document.createElement('div');
        newElement.innerHTML = `<div class="div_result">
                                <div>Polarity = <span class="api_res">${data.score_tag}</span> [P+ / P / NEU / N / N+ / NONE]</div>
                                <div>Agreement = <span class="api_res">${data.agreement}</span> [AGREEMENT / DISAGREEMENT]</div>
                                <div>Subjectivity = <span class="api_res">${data.subjectivity}</span> [OBJECTIVE / SUBJECTIVE]</div>
                                <div>Irony = <span class="api_res">${data.irony}</span> [IRONIC / NONIRONIC]</div>
                                <div>Confidence = <span class="api_res">${data.confidence}</span> [0..100]</div>
                                </div>`;
        document.getElementById('res_goes_here').appendChild(newElement);
    } catch (error) {
        console.log('error', error);
    }
}

export { handleSubmit }