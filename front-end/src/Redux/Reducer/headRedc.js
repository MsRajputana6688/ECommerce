import Categories from '../DataBase/HeadData'
const headRedc = (state = Categories[0], action) => {
    switch (action.type) {
        case 'CNHEADCATE': {
            return Categories[action.pyload]
        }
        default: {
            return Categories[0]
        }
    }
}
export default headRedc 