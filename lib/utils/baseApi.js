const axios = require('axios')

class BaseApi {
    _getFixedConfig() {
        return {
        }
    }

    fetch(config) {
        const fixedConfig = this._getFixedConfig()
        return axios.request({...fixedConfig, ...config})
    }

    async get(url, params) {
        const res = await this.fetch({method: 'GET', url, params})
        return res?.data;
    }

    async post(url, data = {}) {
        const res = await this.fetch({method: 'POST', url, data})
        return res?.data;
    }

    async postForm(url,form){
        const res = await this.fetch({
            url,
            method: 'POST',
            headers: form.headers(),
            data: form
        })
        return res?.data;
    }
}

const baseApi = new BaseApi()
module.exports = baseApi
