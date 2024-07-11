const host =  [
    {name:'baticq.com', subName:'www.baticq.com', value:'-1'},
    {name:'baaaat.com', subName:'www.baaaat.com', value:'-2'},
    {name:'batchat.com', subName:'www.batchat.com', value:'-3'},
    {name:'fbchat.com.cn', subName:'www.fbchat.com.cn', value:'-7'},
    {name:'feifukeji.com', subName:'www.feifukeji.com', value:'-8'},
    {name:'batchatapp.com', subName:'www.batchatapp.com', value:'-9'},
    {name:'moxin.chat', subName:'www.moxin.chat', value:'-10'},
    {name:'batmsg.com', subName:'www.batmsg.com', value:'-14'},

    {name:'hwchat.com', subName:'www.hwchat.com', value:'-12'},
    {name:'ypchat.com', subName:'www.ypchat.com', value:'-13'},
    {name:'liaotianapp.com', subName:'www.liaotianapp.com', value:'-11'},
    {name:'grbeechat.com', subName:'www.grbeechat.com', value:'-4'},
    {name:'wuchatapp.xyz', subName:'www.wuchatapp.xyz', value:'-5'},
    {name:'moxinim.com', subName:'www.moxinim.xyz', value:'-6'},
]


let _host = window.location.host
for(let i = 0; i < host.length; i++){
    if(_host === host[i].name || _host === host[i].subName){
        if(document.getElementById('shu-bei')){
            document.getElementById('shu-bei').innerText = `蜀ICP备19040194号${host[i].value}`
        }
        if(document.getElementById('shu-bei-m')){
            document.getElementById('shu-bei-m').innerText = `蜀ICP备19040194号${host[i].value}`
        }

    }
}
