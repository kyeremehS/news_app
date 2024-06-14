import { create } from 'apisauce'

const api = create({
  baseURL: 'https://newsapi.org/v2',
})
const apiKey='?country=us&apiKey=ffb53a8ae53642acbf88c07f8632281e'

const getTopHeadline=api.get('/top-headlines' + apiKey)
const getBycategory=(category)=>api.get('/everything?q='+category)
export default{
  getTopHeadline,
  getBycategory
}
