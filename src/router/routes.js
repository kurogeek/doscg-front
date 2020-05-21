import Homepage from "./views/home/Home.vue";
import Doscg from "./views/doscg/Doscg";

import Xyz from "./views/xyz/Xyz";
import BC from "./views/bc/Bc";
import Gmap from "./views/map/Map";

export default [
    {
        path: '/',
        name: 'home',
        component: Homepage,
    }, {
        path: '/doscg',
        name: 'doscg',
        component: Doscg,
        children: [
            {
                path: '',
                name: 'xyz',
                component: Xyz,
            }, {
                path: '/bc',
                name: 'bc',
                component: BC,
            }, {
                path: '/map',
                name: 'map',
                component: Gmap,
            },
        ],
    },
    
]