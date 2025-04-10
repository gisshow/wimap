// 负责控制 基础平台 Vue 项目的 UI 组件

let UIConfig = {
    // 当时组件的状态，是用于 Demo 演示，还是用在正真的生产环境下。
    demoModel: true,
    themeColor: 'green',
    titleHeader: {
        // left: [
        //     { id: 'Introduce', name: '平台介绍', type: 'url', defaultOptions: false, url: 'http://8.146.208.114:8083/' },
        //     { id: 'UserBook', name: '用户手册', type: 'url', defaultOptions: false, url: 'http://8.146.208.114:8083/zh/简介/' },
        //     { id: 'APIBook', name: 'API文档', type: 'url', defaultOptions: false, url: 'http://8.146.208.114:3000/VGEEarth-SDK-API/index.html' }
        // ],
        // right: [
        //     { id: 'codeBase', name: '开源代码', type: 'url', defaultOptions: false, url: 'https://github.com/WangShan010/MetaVGE-3DVis-Vue3' },
        //     { id: 'CodeView', name: '代码示例', type: 'url', defaultOptions: false, url: './#/example' },
        //     { id: 'productsView', name: '案例展示', type: 'menu', defaultOptions: false }
        // ]
    },
    comActions: [
        // UI 挂件
        { name: '头部标题栏', type: 'UIPendant', open: true, comName: 'titleHeader', role: 'all' },
        { name: '基础功能栏', type: 'UIPendant', open: true, comName: 'functionBar', role: 'all' },
        { name: '资源管理树', type: 'UIPendant', open: false, comName: 'resourceTree', role: 'all' },
        { name: '底图选取', type: 'UIPendant', open: false, comName: 'baseMap', role: 'all' },
        { name: '工具箱', type: 'UIPendant', open: false, comName: 'toolBox', role: 'all' },
        { name: '大数据可视化', type: 'UIPendant', open: false, comName: 'Echarts-MapV', role: 'all' },
        { name: '信息面版', type: 'UIPendant', open: false, comName: 'infoWindows', role: 'all' },
        { name: '地球相机信息栏', type: 'UIPendant', open: false, comName: 'earthPositionInfo', role: 'all' },
        { name: '地图资源选择盒', type: 'UIPendant', open: true, comName: 'ResourceBoxShow', role: 'all' },


        // 工具箱内模块
        { name: '图上量算', type: 'ToolBoxItem', open: false, comName: 'measureTool', config: { inToolBox: true, iconClass: 'vge-shuipingliangsuan' }, role: 'all' },
        { name: '剖面分析', type: 'ToolBoxItem', open: false, comName: 'geologicalSection', config: { inToolBox: true, iconClass: 'vge-shuipingliangsuan', role: 'all' } },
        { name: '坐标定位', type: 'ToolBoxItem', open: false, comName: 'coordinates', config: { inToolBox: true, iconClass: 'vge-dingwei' }, role: 'all' },
        { name: '地区导航', type: 'ToolBoxItem', open: false, comName: 'areaNavigation', config: { inToolBox: true, iconClass: 'vge-daohang1' }, role: 'all' },
        { name: '视角书签', type: 'ToolBoxItem', open: false, comName: 'visualMarker', config: { inToolBox: true, iconClass: 'vge-biaoqian' }, role: 'all' },
        { name: '图上标绘', type: 'ToolBoxItem', open: false, comName: 'plotTool', config: { inToolBox: true, iconClass: 'vge-Icon_lujinghuizhi' }, role: 'all' },
        { name: '卷帘对比', type: 'ToolBoxItem', open: false, comName: 'ImageLayerSplitMana', config: { inToolBox: true, iconClass: 'vge-juanlian' }, role: 'all' },
        { name: '时序图层', type: 'ToolBoxItem', open: false, comName: 'ImageLayerTimeLine', config: { inToolBox: true, iconClass: 'vge-timeline' }, role: 'all' },
        { name: '路线规划', type: 'ToolBoxItem', open: false, comName: 'pathPlanning', config: { inToolBox: true, iconClass: 'vge-zhuanyiluxian' }, role: 'all' },
        { name: '路径漫游', type: 'ToolBoxItem', open: false, comName: 'pathRoaming', config: { inToolBox: true, iconClass: 'vge-zhuanyiluxian' }, role: 'all' },
        { name: '天空盒', type: 'ToolBoxItem', open: false, comName: 'skyBoxTool', config: { inToolBox: true, iconClass: 'vge-jiejing' }, role: 'all' },
        { name: 'VR立体', type: 'ToolBoxItem', open: false, comName: 'vr3d', config: { inToolBox: true, iconClass: 'vge-zhuanyiluxian' }, role: 'all' },
        { name: '实时天气', type: 'ToolBoxItem', open: false, comName: 'weather', config: { inToolBox: false, iconClass: 'vge-duoyun' }, role: 'all' },
        {
            name: '洪水模型',
            type: 'ToolBoxItem',
            open: false,
            comName: 'floodModel',
            config: {
                inToolBox: true,
                iconClass: 'vge-texiao'
            },
            role: 'all'
        },
        { name: '几何特效', type: 'ToolBoxItem', open: false, comName: 'featureEffect', config: { inToolBox: true, iconClass: 'vge-texiao' }, role: 'all' },
        { name: '场景特效', type: 'ToolBoxItem', open: false, comName: 'specialEffect', config: { inToolBox: true, iconClass: 'vge-texiao' }, role: 'all' },
        { name: '视图管理', type: 'ToolBoxItem', open: false, comName: 'linkView', config: { inToolBox: true, iconClass: 'vge-texiao' }, role: 'all' },
        { name: '粒子系统', type: 'ToolBoxItem', open: false, comName: 'particleSystem', config: { inToolBox: true, iconClass: 'vge-texiao' }, role: 'all' },
        { name: '插件管理', type: 'ToolBoxItem', open: false, comName: 'PluginManagement', config: { inToolBox: true, iconClass: 'vge-texiao' }, role: 'all' },

        { name: '水体特效', type: 'Pendant', open: false, comName: 'waterSpecial', role: 'all' },
        { name: '火焰粒子', type: 'Pendant', open: false, comName: 'firePlot', role: 'all' },
        { name: '喷泉粒子', type: 'Pendant', open: false, comName: 'fountainPlot', role: 'all' },
        { name: '烟雾粒子', type: 'Pendant', open: false, comName: 'smokePlot', role: 'all' },
        { name: '图例', type: 'Pendant', open: false, comName: 'legend' }
    ],
    meuns: [
        {
            name: '菜单', icon: 'icon-home2', id: 'home-tab', ahref:'', href: 'tab-home', ariacontrols: 'tab-home', ariaselected: false,
            class: "nav-link",
            sidebarmenu: [

                {
                    ulname: "菜单", class:"list-heading",
                    a: [
                        { name: '免费模型', href: "#3dmodels" },
                        { name: '付费模型', href: "#3dmodelspay" }
                    ],

                }
                // {
                //     ulname: "Layouts",class:"list-heading",
                //     a: [
                //         { name: 'Dashboard', href: "example" },
                //         { name: 'Analytics', href: "blank" }
                //     ],

                // }

            ],

            sidebarstarts: [
                { name: '付费模型',   href: "3dmodelspay", context: 22, color: "red" },
                { name: '免费模型', href: "#3dmodels", context: 12, color: "blue" },
            ]

        },
        // {
        //     name: 'Product', icon: 'icon-layers2', id: 'product-tab', ahref:'', href: 'tab-product', ariacontrols: 'tab-product', ariaselected: false,
        //     class: "nav-link",
        //     sidebarmenu: [
        //         {
        //             ulname: "Dashboard",class:"list-heading",
        //             a : [
        //                 { name: 'Dashboard', href: "example" },
        //                 { name: 'Analytics', href: "blank" }
        //             ],

        //         },
        //         {
        //             ulname: "Layouts",class:"list-heading",
        //             a: [
        //                 { name: 'Daygrid View', href: "example" },
        //                 { name: 'List View', href: "blank" }
        //             ],

        //         }

        //     ],

        //     sidebarstarts: [
        //         { name: 'New Orders',   href: "VRScreen", context: 12, color: "red" },
        //         { name: 'Products Grid', href: "home", context: 12, color: "blue" },

        //     ]
        // },
        {
            name: 'Settings', icon: 'icon-settings1', id: 'settings-tab', ahref:'login', href: 'tab-settings', ariacontrols: 'tab-authentication', ariaselected: false,
            class: "nav-link settings",
        },


    ],
    model:[
        {img:"1.jpg", path:"1.glb", title:"坦克" , Download:true, preview:true},
    
        {img:"1.jpg", path:"1.glb",  title:"坦克3" , Download:true, preview:true},
        {img:"1.jpg", path:"1.glb",  title:"坦克4" , Download:true, preview:true},
        {img:"1.jpg", path:"1.glb", title:"坦克" , Download:true, preview:true},
    
        {img:"1.jpg", path:"1.glb",  title:"坦克3" , Download:true, preview:true},
        {img:"1.jpg", path:"1.glb",  title:"坦克4" , Download:true, preview:true},
        {img:"1.jpg", path:"1.glb", title:"坦克" , Download:true, preview:true},
    
        {img:"1.jpg", path:"1.glb",  title:"坦克3" , Download:true, preview:true},
        {img:"1.jpg", path:"1.glb",  title:"坦克4" , Download:true, preview:true}
    ],
    paymodel:[
        
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
       
    ]

    
};


window.UIConfig = UIConfig;
