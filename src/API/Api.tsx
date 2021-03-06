export const fetchTest = () => {
  const baseURL = 'https://yacdn.org/proxy/https://torre.bio/api'
  return fetch(baseURL + '/bios/hectorvmlopez').then(res => res.json());
}

export const fetchJob = (job:string='react') => {


    const baseURL = 'https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=40&aggregate=false&offset=0'
    let _data = {"and":[{"skill/role":{"text":`${job}`,"experience":"potential-to-develop"}},{"type":{"code":"full-time-employment"}},{"status":{"code":"open"}},{"compensationrange":{"minAmount":9,"maxAmount":500,"currency":"USD$","periodicity":"hourly"}}]}
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(res => res.json());
  }