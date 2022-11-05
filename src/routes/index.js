import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import UpLoad from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: UpLoad, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
]
const privateRoutes = [

]

export { publicRoutes, privateRoutes }