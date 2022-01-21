const Welcome = () => import('./components/Welcome.vue')
const CarList = () => import('./components/car/List.vue')
const CarAdd = () => import('./components/car/Add.vue')
const CarEdit = () => import('./components/car/Edit.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'carList',
        path: '/car',
        component: CarList
    },
    {
        name: 'carEdit',
        path: '/car/:id/edit',
        component: CarEdit
    },
    {
        name: 'carAdd',
        path: '/car/add',
        component: CarAdd
    }
]
