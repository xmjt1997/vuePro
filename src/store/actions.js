export default {

    //处理首页新闻数据
    homeNews: ({ commit }, value) => {

        let newsData = []
        for (let i = 0; i < value.length; i++) {
            let datas = {}
            datas.title = value[i].title
            datas.author = value[i].author_name
            datas.contxt = value[i].content
            datas.img2 = value[i].thumbnail_pic_s02
            newsData.push(datas)
        }
        commit('homeNews', newsData)
    },

    interNews: ({ commit }, value) => {

        let newsData = []
        for (let i = 0; i < value.length; i++) {
            let datas = {}
            datas.title = value[i].title
            datas.author = value[i].author_name
            datas.contxt = value[i].content
            datas.img2 = value[i].thumbnail_pic_s02
            newsData.push(datas)
        }
        commit('interNews', newsData)
    },

    moneyNews: ({ commit }, value) => {

        let newsData = []
        for (let i = 0; i < value.length; i++) {
            let datas = {}
            datas.title = value[i].title
            datas.author = value[i].author_name
            datas.contxt = value[i].content
            datas.img2 = value[i].thumbnail_pic_s02
            newsData.push(datas)
        }
        commit('moneyNews', newsData)
    },
    societyNews: ({ commit }, value) => {

        let newsData = []
        for (let i = 0; i < value.length; i++) {
            let datas = {}
            datas.title = value[i].title
            datas.author = value[i].author_name
            datas.contxt = value[i].content
            datas.img2 = value[i].thumbnail_pic_s02
            newsData.push(datas)
        }
        commit('societyNews', newsData)
    },
    recreationNews: ({ commit }, value) => {

        let newsData = []
        for (let i = 0; i < value.length; i++) {
            let datas = {}
            datas.title = value[i].title
            datas.author = value[i].author_name
            datas.contxt = value[i].content
            datas.img2 = value[i].thumbnail_pic_s02
            newsData.push(datas)
        }
        commit('recreationNews', newsData)
    },



}


