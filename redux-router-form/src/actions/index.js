import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=9989';

/**
 * @returns {Object} Redux object
 */
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        payload: request,
        type: FETCH_POSTS
    };
}