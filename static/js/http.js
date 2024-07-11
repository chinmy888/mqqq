function xhrPost(url, data){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
        xhr.onload = () => {
            if(xhr.response){
                resolve(JSON.parse(xhr.response))
            }else{
                reject(xhr)
            }
        }
        xhr.send(JSON.stringify(data))
    })
}

/**
 * 动态导航列表
 * @param data
 * @returns {Promise<unknown>}
 */
const bannerList = data => xhrPost(`https://security.baaaat.com/college/article/cate/list/query`, data)

/**
 * 文章列表
 * @param data
 * @returns {Promise<unknown>}
 */
const bannerDataList = data => xhrPost(`https://security.baaaat.com/college/website/list`, data)

/**
 * 推荐
 * @param data
 * @returns {Promise<unknown>}
 */
const rmdDataList = data => xhrPost(`https://security.baaaat.com/college/website/random/list`, data)

const articleInfos = data => xhrPost(`https://security.baaaat.com/college/website/get`, data)

/**
 * 统计
 * @param data
 * @returns {Promise<unknown>}
 */
const homeStatistics = data => xhrPost(`https://security.baaaat.com/college/home/operate/click`, data)

const reportInfo = data => xhrPost(`https://api.liaotianapp.com/report/info`, data)