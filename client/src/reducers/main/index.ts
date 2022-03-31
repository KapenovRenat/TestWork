
export interface InitialState {
    name: string;
    version: string;
}

const INITIAL_STATE: InitialState = {
    name: 'Test Work',
    version: '1.0.0'
}


export default (state: InitialState = INITIAL_STATE, { type, payload }: {type: any, payload: any}): InitialState => {
    switch (type) {
        default: {
            return state;
        }
    }
}
