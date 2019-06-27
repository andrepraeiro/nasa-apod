const dateUtils = {
    getDateArray: (start, end) => {

        const list = []
        const date = new Date(start)
        while (date >= end) {
            list.push(new Date(date))
            date.setDate(date.getDate() - 1)
        }
        return list
    }
    , formatDate: (d) => {
        return [
            d.getFullYear(),
            ('0' + (d.getMonth() + 1)).slice(-2),
            ('0' + d.getDate()).slice(-2)
        ].join('-');
    }
}

export default dateUtils
