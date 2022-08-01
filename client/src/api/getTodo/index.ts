import axios, { AxiosResponse } from 'axios';

import { getTodoResult } from 'types/todos.type';

export const getTodo = async (id: string): Promise<AxiosResponse<getTodoResult>> => {
    try {
        const res = await axios({
            method: 'GET',
            url: `http://localhost:8080/api/todo/${id}`
        })
        
        return res
    } catch (err) {
        throw new Error("err");
    }
}
