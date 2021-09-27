// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '学习笔记',
        items: [
          { text: '《Vue》', link: '/note/vue/' },
        ],
      },
    ],
  },
  {
    text: '后端',
    link: '/technology/',
    items: [
      { text: 'SpringBoot', link: '/pages/29fbc5/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '随笔', link: '/pages/f2e63f/' },
      {text:'LeetCode',link:'/pages/e43b82/'}
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
    ],
  },
]
