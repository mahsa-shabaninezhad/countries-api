const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const getTime = () => {
    const date = new Date()
    const month = date.getMonth()
    const day = date.getDate()
    const h = date.getHours()
    const m = date.getMinutes()
    
    const minute = m>9 ? m : `0${m}`
    const hour = h>12 ? h-12 : h
    const time = `${hour}:${minute}${h>12 ? 'pm' : 'am'}`

    return `${time}, ${months[month]} ${day}`

}

export default getTime
