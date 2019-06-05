export default {
    path: "/Movie",
    name: "Movie",
    component: () => import("@/views/Movie"),
    children: [{
            path: "/Movie",
            redirect: "/Movie/NowPlaying"
        },
        {
            name: "City",
            path: "City",
            component: () => import("@/components/City")
        }, {
            name: "CommingSoon",
            path: "CommingSoon",
            component: () => import("@/components/CommingSoon")
        }, {
            name: "NowPlaying",
            path: "NowPlaying",
            component: () => import("@/components/NowPlaying")
        }, {
            name: "Search",
            path: "Search",
            component: () => import("@/components/Search")
        },

    ]
}