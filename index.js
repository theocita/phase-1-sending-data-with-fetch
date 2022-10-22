
function submitData(name, email){
    fetch('http://localhost:3000/users',{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
    },
    body: JSON.stringify({name, email})
})
.then(res => res.json())
.then(data => console.log(data))
.catch(function (error){
    alert('Unauthorized Access');
    console.log(error.message)
})
}