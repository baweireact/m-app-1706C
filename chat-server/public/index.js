const registerTest = document.getElementById('registerTest');
const testGet = document.getElementById('testGet');
const testPost = document.getElementById('testPost');
registerTest.addEventListener('click', ()=> {
    axios.post('/user/register').then(res => {
        console.log(res);
    })
}, false);

testGet.addEventListener('click', () => {
    axios.get('/getTest').then((res) => {
        console.log(res);   
    })
}, false);
testPost.addEventListener('click', () => {
    axios.post('/postTest').then(res => {
        console.log(res);
    })
}, false);