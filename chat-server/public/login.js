const userNameInput = document.getElementById('username');
const userPwdInput = document.getElementById('userpwd');
const registerBtn = document.getElementById('registerbtn');
const sendWord = document.getElementById('sendWord');
const dynamicList = document.getElementById('dynamicList');
const userNameH1 = document.getElementById('userName');
axios.get('/user/loginUser').then(res => {
    if(res.data.code === 1){
        userNameH1.innerHTML = `亲爱的，${res.data.data}`;
    }
})
registerBtn.addEventListener('click', () => {
    let userName = userNameInput.value;
    let userPwd = userPwdInput.value;
    axios.post('/user/login', {userName, userPwd}).then(response => {
        if(response.data.code === 1){
            userNameH1.innerHTML = `亲爱的，${userName}`;
        }
    })
}, false);

sendWord.addEventListener('click', () => {
    axios.post('/dynamic/sendWord', {dynamicContent: '今天心情不好'}).then(data => {
        console.log(data);
    })
}, false);
function renderReply(userName, replys){
    return replys.map(item => {
        return `<div>
            <div>
                <span>${item.userName}回复${userName}</span>
                <span>${item.replyContent}</span>
                <button class="replyBtn" commentReplyid="${item.commentReplyid}">回复</button>
            </div>
            <div>${renderReply(item.userName, item.replys)}</div>
        </div>`
    })
}
axios.get('/dynamic/showDynamic').then(data => {
    if(data.data.code === 1){
        dynamicList.innerHTML = data.data.data.map(item => {
            if(!item.userName){
                return
            }
            return `<li class="dynamic" dynamicid="${item.dynamicid}">
                <div>
                    <span>
                    ${item.userName}说：
                    </span>
                    <span>
                        ${item.dynamicContent}
                    </span>
                </div>
                
                <div>
                    <button class="commentBtn">评论</button>
                </div>
                <div class="comments">
                    ${item.comments.map(val => {
                        return `<div>
                        <div>
                            <span>${val.userName}评论：</span>
                            <span>${val.commentContent}</span>
                            <button class="replyBtn" commentReplyid="${val.commentReplyid}">回复</button>
                        </div>
                        <div>
                            ${renderReply(val.userName, val.replys)}
                        </div>
                    </div>`
                    }).join('')}
                </div>
            </li>`
        }).join('');
    }else{
        alert(data.data.msg);
    }
})


dynamicList.addEventListener('click', ev => {
    let dynamicid = null;
    if(ev.target.className === 'commentBtn'){
        dynamicid = ev.target.parentNode.parentNode.getAttribute('dynamicid');
        let commentContent = prompt('请输入文字');
        axios.post('/commentreply/publishcomment', {commentContent, dynamicid}).then(data => {
            console.log(data);
        })
    }else if(ev.target.className === 'replyBtn'){
        let toCommentReplyid = ev.target.getAttribute('commentReplyid');
        let replyContent = prompt('请回复');
        axios.post('/commentreply/publishreply', {toCommentReplyid, replyContent}).then(data => {
            console.log(data);
        });
    }
    
}, false);