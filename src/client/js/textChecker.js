function checkForText(inputText) {
    document.getElementById('res_goes_here').innerHTML = "";
    if (inputText.trim() == '') 
    {
        document.getElementById('res_goes_here').innerHTML = '<div class="api_res">Please fill the form above</div>';
        return false;
    }
    return true;
}

export { checkForText }
