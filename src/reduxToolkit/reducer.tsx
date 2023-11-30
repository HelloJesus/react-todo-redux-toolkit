import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    counter: number,
    list: {
        id: number,
        title: string,
        complete: boolean
    }[]
}

const initialState = {
    counter: 0,
    list: [{
        id: 0,
        title: 'First task',
        complete: false
    }]
} as initialStateType

const postsSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        createTodo(state, action) {
            return {
                counter: state.counter + 1,
                list: [
                    ...state.list,
                    { id: state.counter + 1, title: action.payload.title, complete: false }
                ]
            }
        },
        completeTodo(state, action) {
            return {
                ...state,
                list: state.list.map(item => item.id === action.payload.id ? { ...item, complete: !item.complete } : item)
            }
        },
        deleteTodo(state, action) {
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload.id)
            }
        },
        clearTodo() {
            return initialState
        }
    }
})

export const { createTodo, completeTodo, deleteTodo, clearTodo } = postsSlice.actions
export default postsSlice.reducer