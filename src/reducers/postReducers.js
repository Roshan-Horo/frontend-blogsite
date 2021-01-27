import * as actions from '../constants/postConstants'

export const postListReducers = (state = {posts: []}, action) => {
    switch (action.type) {
        case actions.POST_LIST_REQUEST:
            return {loading: true}
        case actions.POST_LIST_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }
        case actions.POST_LIST_FAIL:
            return { loading: false, error: action.payload}
    
        default:
            return state
    }
}

export const postCreateReducers = (state = {}, action) => {
    switch (action.type) {
        case actions.POST_CREATE_REQUEST:
            return {loading: true}
        case actions.POST_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                post: action.payload
            }
        case actions.POST_CREATE_FAIL:
            return { loading: false, error: action.payload}
    
        case actions.POST_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const postDetailsReducers = (state = {post: {}}, action) => {
    switch (action.type) {
        case actions.POST_DETAILS_REQUEST:
            return {loading: true}
        case actions.POST_DETAILS_SUCCESS:
            return {
                loading: false,
                post: action.payload
            }
        case actions.POST_DETAILS_FAIL:
            return { loading: false, error: action.payload}
    
        default:
            return state
    }
}

export const postDeleteReducers = (state = {posts: []}, action) => {
    switch(action.type){
        case actions.POST_DELETE_REQUEST:
            return {loading: true}
        case actions.POST_DELETE_SUCCESS:
            return {loading: false, success: true}
        case actions.POST_DELETE_FAIL:
            return {loading: false, error: action.payload}
        
        default: 
            return state
    }
}

export const postUpdateReducers = (state = { post: {}}, action) => {
    switch(action.type){
        case actions.POST_UPDATE_REQUEST:
            return {loading: true}
        case actions.POST_UPDATE_SUCCESS:
            return {loading: false, success: true, post: action.payload}
        case actions.POST_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        case actions.POST_UPDATE_RESET:
            return { post: {}}
        
        default:
            return state
    }
}