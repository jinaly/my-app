import React from 'react'
import AddField from '../components/AddField'
import DataList from '../components/DataList'

const routes = [
    {
        path:"/",
        component:<DataList/>,
        exact:true
    },
    {
        path:"/addfield",
        component:<AddField/>,
        exact:true
    }
]

export default routes