document.getElementById('submit-btn').addEventListener('click', function(){
    event.preventDefault();
});

document.getElementById('submit-btn').addEventListener('click', () =>{
    let username = document.getElementById('inputusername').value;
    let url = 'https://api.github.com/users/'+username;
    fetch(url).then(res=>res.json()).then( data =>{
        
        document.getElementById('fullname').innerHTML = data.name;
        document.getElementById('username').innerHTML = "(@"+data.login+")";
        document.getElementById('userimg').src = data.avatar_url;
        document.getElementById('follwers').innerHTML = 'Followers:' + data.followers;
        document.getElementById('following').innerHTML = 'Following:' + data.following;
        document.getElementById('pub-repos').innerHTML = 'Repo:' + data.public_repos;
        
        console.log(data);
    }).catch(e=>{
        console.log(e);
    })
});


document.getElementById('submit-btn').addEventListener('click', () =>{
    document.getElementById('repogohere').querySelectorAll('*').forEach( n => n.remove() );
    let username = document.getElementById('inputusername').value;
    let url = 'https://api.github.com/users/'+username+"/repos";
    fetch(url).then(res=>res.json()).then( data =>{
        for(let i = 0; i<data.length; i++){
        let div = document.createElement('div');
        div.classList.add('repo');
        div.innerHTML = data[i].name;
        document.getElementById('repogohere').appendChild(div);}
        console.log(data);
    }).catch(e=>{
        console.log(e);
    })
});