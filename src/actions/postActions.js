import * as actions from '../constants/postConstants'
import axios from 'axios'

export const listPosts = () => async (dispatch) => {
    try {
        dispatch({type: actions.POST_LIST_REQUEST})
    
        const {data} = await axios.get(`api/posts`)

        dispatch({
            type: actions.POST_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: actions.POST_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })   
    }
}

export const listPostDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actions.POST_DETAILS_REQUEST})

        const { data} = await axios.get(`/api/posts/${id}`)

        dispatch({
            type: actions.POST_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: actions.POST_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const createPost = () => async (dispatch,getState) => {
    try {
        dispatch({type: actions.POST_CREATE_REQUEST})

        const { userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data} = await axios.post(`/api/posts`,{},config)

        dispatch({
            type: actions.POST_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: actions.POST_CREATE_FAIL,
            payload: 
                error.response && error.respnse.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
} 

export const deletePost = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: actions.POST_DELETE_REQUEST
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(
           `/api/posts/${id}`,
           config
        )

        dispatch({
            type: actions.POST_DELETE_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: actions.POST_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updatePost = (post) => async (dispatch, getState) => {
    try {
        dispatch({type: actions.POST_UPDATE_REQUEST})

        const { userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data} = await axios.put(`/api/posts/${post._id}`,post,config)

        dispatch({
            type: actions.POST_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actions.POST_UPDATE_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message 
        })
        
    }
}