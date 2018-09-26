var app = new Vue({
    el: '#app',
    data() {
        return {
            categories: [
                {
                    name: '院系部门',
                    sites: [
                        { name: '学校首页', url: 'http://www.cczu.edu.cn/' },
                        { name: '教务处', url: 'http://jwc.cczu.edu.cn/' },
                        { name: '图书馆', url: 'http://lib.cczu.edu.cn/' },
                    ]
                },
                {
                    name: '学校事务',
                    sites: [
                        { name: '教师门户', url: 'http://my.cczu.edu.cn/' },
                        { name: '教工邮箱', url: 'http://mail.cczu.edu.cn/' },
                        { name: '学生门户', url: 'http://s.cczu.edu.cn/' },
                        { name: '学生邮箱', url: 'http://mail.smail.cczu.edu.cn/' },
                        { name: '教务单点登录接入平台', url: 'http://jwcas.cczu.edu.cn' },
                        { name: '我的图书馆', url: 'http://219.230.159.165:8080/reader/' },
                        { name: '一卡通系统', url: 'http://card.cczu.edu.cn/' },
                        { name: '选课和评教 1', url: 'http://211.65.74.100/' },
                        { name: '选课和评教 2', url: 'http://211.65.74.101/' },
                        { name: '选课和评教 3', url: 'http://211.65.74.102/' },
                        { name: '选课和评教 4', url: 'http://211.65.74.103/' },
                        { name: 'SPOC', url: 'http://spoc.cczu.edu.cn/' },
                        { name: '尔雅通识课（视频网络通识课）', url: 'http://cczu.fy.chaoxing.com/' },
                        { name: '高校邦通识课', url: 'http://cczu.gaoxiaobang.com/' },
                        { name: '智慧树通识课', url: 'http://www.zhihuishu.com/' },
                        { name: 'CCZU Helper（讲座和体育刷卡查询）', url: 'https://cczu.fatewolf.com/' },
                    ]
                },
            ]
        }
    }
})
