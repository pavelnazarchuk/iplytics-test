import axios from 'axios';
import { GetGif } from './types';

 const api_key = "ARj6kkjzPc9285bIbHEzN6p2SU2dghPX";

const api = axios.create({
    params: { api_key }
})

/**
 * @param {string} q - search query.
 * @param {number} offset - starting position of the results.
 * @param {number} limit - The maximum number of objects
 */
export const getGif: GetGif = (q, offset, limit) => api.get('https://api.giphy.com/v1/gifs/search', {
    params: {
        q,
        offset,
        limit
    }
})


