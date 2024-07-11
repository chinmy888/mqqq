const devMap = {1:'click', 2:'ios', 3:'android', 6:'google'}
const data = {
    isTutorial:false,
    isPc:false,
    isClick:true
}

window.onload = () => {
    if(location.hash){
        window.location.href = window.location.origin
    }

    document.getElementById('switch-menus').addEventListener('click', () => {
        document.getElementById('mobile-menus').style.display = "block"
    })
    document.getElementById('menu-close').addEventListener('click', () => {
        document.getElementById('mobile-menus').style.display = "none"
    })
    handleEvent(1, 'https://www.batchat.com/share/share.html')
    handleEvent(2, 'https://apps.apple.com/cn/app/id1661048017')
    handleEvent(3, 'https://dl.feifukeji.com/bat.apk')
    handleEvent(6, 'https://play.google.com/store/apps/details?id=com.woyue.batchat&hl=en')

}

const goEnglish = (str) => {
    console.log(str)
    if(str === 'index'){
        window.location.href = `https://www.batchat.com/home.html`
    }else{
        window.location.href = `https://www.batchat.com/home.html#/${str}`
    }
}

const handleEvent = (num, url) => {
    const $arr = document.getElementsByTagName('a')
    for(let i = 0; i < $arr.length; i++){
        if($arr[i].getAttribute('href') === url){
            $arr[i].addEventListener('click', () => {
                batBuriedPoint(num)
            })
        }
    }
}

const batBuriedPoint = (vs) => {
    console.log(vs)
    if(data.isClick){
        const $data = {
            channel: getQueryString('channel'),
            key: getQueryString('key'),
            terminal: getQueryString('terminal'),
            browse:1
        }
        if(vs){
            $data[devMap[vs]] = 1
        }
        data.isPc = false
        if(window.innerWidth > 750){
            data.isPc = true
        }
        if(vs !== 3) {
            data.isTutorial = false
        }else{
            androidAlert()
        }
        statisticsReq($data, data.isClick)
    }
}

const androidAlert = () => {
    if(!document.getElementById('bat-adr-alert')){
        return
    }
    document.getElementById('bat-adr-alert').style.display = 'block'
    if(!document.getElementById('bat-adr-alert').innerHTML){
        let $node = ''
        $node += `
            <div class="bat-ist flex-center-ctn" >
                <div class="bat-ist-content bat-ist-rt">
                    <div class="bat-ist-header mw">
                        <img src="../svg/zh/pc/bat_pc_logo.svg" alt="logo">
                        <img src="../svg/icon_close.svg" alt="close" class="bat-ist-close" id="close-adr-alert">
                    </div>
                    <div class="bat-ist-con mw">
                        <div>
                            <h1>感谢下载！</h1>
                            <h1>蝙蝠·免费的即时聊天工具</h1>
                        </div>
                        <p> 
                            您的下载任务将会自动开始，若无法正常下载，<a href="https://dl.baticq.com/bat.apk">手动下载 蝙蝠APP</a>
                        </p>
                        <p> 
                            安装失败怎么办？<a href="https://www.batchat.com/installhelp/index.html#/ds/index">查看蝙蝠APP安装教程</a>
                        </p>
                    </div>
                </div>
            </div>
        `
        document.getElementById('bat-adr-alert').innerHTML = $node
    }
    document.getElementById('close-adr-alert').addEventListener('click', () => {
        document.getElementById('bat-adr-alert').style.display = 'none'
    })
}

const statisticsReq = ($data, isClick) => {
    homeStatistics($data).then(res => {
        console.log(res)
        isClick = true
    }).catch(err => {
        isClick = true
        console.log(err)
    })
}


function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
