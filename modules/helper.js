const HopHelper = {
  addCourseDuration(product) {
    let courseDuration = product.courseDuration[0]
    let dates = product.dates.map((date, index) => {
      return new Date(date)
    })

    let endDay = (courseDate) => {
      let day = '' + courseDate.getDay()
      let lastDay = parseInt(day)

      let finalDay = (lastDay += courseDuration)

      let string = finalDay.toString()

      if (string.length < 2) {
        string = '0' + string
      }

      return string
    }

    let startDate = dates.map((courseDate, index) => {
      let day = '' + courseDate.getDay()
      let month = '' + (courseDate.getMonth() + 1)
      let year = courseDate.getFullYear()

      if (day.length < 2) {
        day = '0' + day
      }

      if (month.length < 2) {
        month = '0' + month
      }

      return [year, month, day].join('-')
    })

    let endDate = dates.map((courseDate, index) => {
      let month = '' + (courseDate.getMonth() + 1)
      let year = courseDate.getFullYear()

      if (month.length < 2) {
        month = '0' + month
      }

      return [year, month, endDay(courseDate)].join('-')
    })
    let options = startDate.map(function (e, i) {
      return [e, endDate[i]].join(' - ')
    })
    return options.map((option, index) => {
      return <option key={index} >{option}</option>
    })
  },
}

export default HopHelper
