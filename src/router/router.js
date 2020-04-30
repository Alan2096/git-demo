import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () =>
    import ('../Home')
const VueBaseGrammar = () =>
    import ('../view/vue/BaseGrammar')
const JsBaseGrammar = () =>
    import ('../view/js/BaseGrammar')
const VueMain = () =>
    import ('../view/VueMain')
const JsMain = () =>
    import ('../view/JsMain')
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [{
                path: '',
                redirect: '/home/VueMain/BaseGrammar'
            },
            {
                path: 'VueMain',
                name: 'VueMain',
                component: VueMain,
                children: [
                    { path: 'BaseGrammar', name: 'VueBaseGrammar', component: VueBaseGrammar }
                ]
            },
            {
                path: 'JsMain',
                name: 'JsMain',
                component: JsMain,
                children: [
                    { path: 'BaseGrammar', name: 'JsBaseGrammar', component: JsBaseGrammar }
                ]
            }
        ]
    }
]
export default new Router({
    routes,
    mode: 'history'
})