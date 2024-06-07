import axios from './index.js'

export async function fetchItemsList(params) {
  try {
    const { data } = await axios.get('/items',
      {
        params
      }
    )
    return data.data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (err) {
    console.log(err)
  }
}
