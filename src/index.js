const endpoint = 'http://localhost:3000/movies';

const init = () => {
    const form = document.querySelector("form");
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');
    
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const val = searchByID.value;

        if(!val || !Number(val)){ return ;}

        
        fetch(`${endpoint}/${val}`)
        .then(res=>{
            if(!res.ok){ throw Error; }
            return res.json();
        })
        .then(json=>{
            title.innerText = json.title;
            summary.innerText = json.summary;
        })
        .catch(err=>{
            title.innerText = "Error";
            summary.innerText = "ID not found!";
        })
        
    });

}

document.addEventListener('DOMContentLoaded', init);