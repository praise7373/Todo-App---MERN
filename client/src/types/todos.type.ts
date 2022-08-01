export interface Todos {
    todos: Todo[];
}

interface Todo {
    _id: string;
    title: string;
    status: 'completed' | 'uncompleted';
    creatrdAt: string;
    updateAt: string;
    __v: number;
}

export interface getTodoResult {
    result: Todo;
}

export interface TodoBody {
    title: string,
    status: 'completed' | 'uncompleted'
}

