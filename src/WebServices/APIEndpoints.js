let BASE_URL = 'https://5d76bf96515d1a0014085cf9.mockapi.io/'

if(process.env.NODE_ENV === 'production') {
    BASE_URL = 'https://5d76bf96515d1a0014085cf9.mockapi.io/'
}

export const GET_PRODUCT_LIST = BASE_URL + '/product';
export const POST_LOGIN = BASE_URL + '/login';