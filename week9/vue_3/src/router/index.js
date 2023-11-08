import { createWebHistory, createRouter } from "vue-router";
import HomeCmt from "../components/HomeCmt.vue";
import MyPageCmt from "../components/MyPageCmt.vue";
import AboutCmt from "../components/AboutCmt.vue";
import SearchCmt from "../components/SearchCmt.vue";

const routes = [    // 라우터 설정
    {
        path: "/",               // 라우터
        component: HomeCmt,
    },
    {
        //path: "/mypage/",
        path: "/mypage/:name/:job",
        component: MyPageCmt,
    },
    {
        path: "/about",       // touter
        component: AboutCmt,
    },
    {
        path: "/search",
        component: SearchCmt,
    },
];

const router = createRouter({  // 라우트 생성
    history: createWebHistory(),
    routes,
});

export default router