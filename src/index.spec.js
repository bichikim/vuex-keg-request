import vuexRequest from './index.ts'
import vuexKeg, {keg} from 'vuex-keg'
import Vue from 'vue'
import Vuex from 'vuex'
describe('vuex-keg-resolve', () => {
  Vue.config.productionTip = false
  Vue.config.devtools = false
  Vue.use(Vuex)
  let store
  store = new Vuex.Store({
    state: {
      test: null,
    },
    actions:{
      ...keg({
        testPathString({request}) {
          return request({
            path: 'https://test.com/pathParams',
            method: 'POST',
          }, {item: 'params'}, null,{item: 'headers'})
        },
        testPathFunction({request}) {
          return request({
            path: ({item}) => (`https://test.com/${item}`),
            method: 'POST',
          }, {item: 'params'}, {item: 'pathParams'}, {item: 'headers'})
        },
      }),
    },
    plugins: [
      vuexKeg({
        plugins: {
          request: vuexRequest({
            request({path, params, headers, pathParams, method}) {
              return Promise.resolve({path, params, headers, pathParams, method})
            },
            requestConfig: {
              basePath: 'https://test.com',
              modules: {

              },
              requests: {
                test: {
                  path: 'test',
                  method: 'POST',
                },
              },
            },
          }),
        },
      }),
    ],
  })

  it('should request', async () => {
    const result = await store.dispatch('testPathString')
    expect(result.path).to.equal('https://test.com/pathParams')
    expect(result.method).to.equal('POST')
    expect(result.params).to.deep.equal({item: 'params'})
    expect(result.headers).to.deep.equal({item: 'headers'})
  })
  it('should request', async () => {
    const result = await store.dispatch('testPathFunction')
    expect(result.path).to.equal('https://test.com/pathParams')
    expect(result.method).to.equal('POST')
    expect(result.params).to.deep.equal({item: 'params'})
    expect(result.headers).to.deep.equal({item: 'headers'})
    expect(result.pathParams).to.deep.equal({item: 'pathParams'})
  })
})
