async function Api(){
    const response = await fetch('https://api.imgflip.com/get_memes');
    return response.json();
}

export default Api;