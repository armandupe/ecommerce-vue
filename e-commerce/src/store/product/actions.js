import axios from 'axios'

export function getProducts({commit}) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    axios.get(url).then((response) => {
        commit('setProducts', response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

export function productDetails({commit}, id) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    axios.get(url, {params: {id: id}}).then((response) => {
        commit('setProduct', response.data[0]);
    })
    .catch(error => {
        console.log(error);
    });
}

export function addCart({commit, getters}, payload) {
    let cart = getters.cart;
    cart.push(payload);
    commit('setCart', cart);
}

export function removeCart({commit, getters}, id) {
    let cart = [];
    if (id) {
        for (let i = 0; i < getters.cart.length; i++) {
            const el = getters.cart[i];
            if (el.id !== id) {cart.push(el)}
        }
    }
    commit('serCart', cart);
}