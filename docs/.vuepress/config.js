module.exports = {
    title: '忐',
    description: 'Just playing around',
    themeConfig: {
        logo: 'https://tan-1310818254.cos.ap-nanjing.myqcloud.com/logo.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '关于', link: 'http://localhost:8080/about/', target: '_self'},
            {text: '友链', link: 'https://u1s1.vip'},
            {
                text: '下拉菜单',
                ariaLabel: '这是提示语',
                items: [
                    {text: '下拉1', link: '/', target: '_self'},
                    {text: '下拉2', link: 'https://u1s1.vip', target: '_blank'}
                ]
            }
        ],
        sidebar: 'auto'
    }
}
