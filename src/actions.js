export const more = (payload) => ({
    type: 'MORE',
    payload
});

export const change_size = (payload) => ({
    type: 'CHANGE_SIZE', 
    payload
});

export const restart = () => ({
    type: 'RESTART'
});

export const max = (payload) => ({
    type: 'MAX',
    payload
});

export const set_modal = (payload) => ({type: 'MODAL', payload});