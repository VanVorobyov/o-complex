import axios from 'axios';

export function fetchCardData(page: number, pageSize: number) {
  return axios.get('http://o-complex.com:1337/products', {
    params: {
      page,
      page_size: pageSize
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Не удалось запросить карточки');
    });
}