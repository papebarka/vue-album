export const photos = {
    namespaced: true,

    state(){
        return {
            all: []
        }
    },

    mutations: {
        setPhotosForCurrentAlbum(state, photos){
            state.all = photos
        }
    },

    actions: {
        async getByAlbum(ctx, { album }){
            const res = await window.fetch(`https://jsonplaceholder.typicode.com/photos?album=${album.id}`)
            const json = await res.json()
            ctx.commit('setPhotosForCurrentAlbum', json)
        }
    }
}