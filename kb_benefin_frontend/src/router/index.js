import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'

import Authentic from '@/pages/join/Authentic.vue'
import PersonalInfo from '@/pages/join/PersonalInfo.vue'
import JoinClear from '@/pages/join/JoinClear.vue'

import LoginMain from '@/pages/login/LoginMain.vue'
import SocialLogin from '@/pages/login/SocialLogin.vue'
import FindId from '@/pages/login/FindId.vue'
import FindPwd from '@/pages/login/FindPwd.vue'
import Guide from '@/pages/login/Guide.vue'
import MyInfo from '@/pages/login/MyInfo.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Main', component: Main },

        // 회원가입
        { path: '/authentic', component: Authentic},
        { path: '/personalinfo', component: PersonalInfo },
        { path: '/joinclear', component: JoinClear },

        // 로그인
        { path: '/loginmain', component: LoginMain },
        { path: '/sociallogin', component: SocialLogin },
        { path: '/findid', component: FindId },
        { path: '/findpwd', component: FindPwd },
        { path: '/guide', component: Guide },
        { path: '/myinfo', component: MyInfo }
    ] 
})

export default router;