export const calcAge = () => {
    const now = new Date()
    const birthday = new Date(1989, 7, 8)
    let age = (now.getFullYear() - birthday.getFullYear())
    if (now.getMonth() < birthday.getMonth() || (now.getMonth() === birthday.getMonth() && now.getDate() < birthday.getDate())) {
      age--
    }
    return age
  }

export const calcCurrentYear = () => {
    const now = new Date()
    return now.getFullYear()
  
  }