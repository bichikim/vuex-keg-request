import vuexRequest from './index.ts'
import vuexKeg, {keg} from 'vuex-keg'
import Vue from 'vue'
import Vuex from 'vuex'
describe('vuex-keg-resolve', () => {
  Vue.config.productionTip = false
  Vue.config.devtools = false
  Vue.use(Vuex)
  describe('test stage 1', () => {
    let store
    store = new Vuex.Store({
      state: {
        test: null,
      },
      actions:{
        ...keg({
          testPathString({request}) {
            return request({
              path: 'pathParams',
              method: 'POST',
            }, {item: 'params'}, null,{item: 'headers'})
          },
          testPathFunction({request}) {
            return request({
              path: ({item}) => (`function/${item}`),
              method: 'POST',
            }, {item: 'params'}, {item: 'pathParams'}, {item: 'headers'})
          },
          testDefault({request}) {
            return request({
            })
          },
          testNameRequest({request}) {
            return request('test', {item: 'params'}, {item: 'pathParams'}, {item: 'headers'})
          },
          testFunctionRequest({request}) {
            return request('testFunction', {item: 'params'}, null, {item: 'headers'})
          },
          testFunctionInObjectRequest({request}) {
            return request('testFunctionInObject', {item: 'params'}, null, {item: 'headers'})
          },
          testModule({request}) {
            return request('test@auth', {item: 'params'}, {item: 'pathParams'}, {item: 'headers'})
          },
          testModuleArrayBasePath({request}) {
            return request('test@docs', {item: 'params'}, {item: 'pathParams'}, {item: 'headers'})
          },
          testObject({request}) {
            return request({
              requestInfo: 'test',
              params: {item: 'params'},
              headers: {item: 'headers'},
            })
          },
          testFunction({request}) {
            return request(
              (path, {params, headers, method}) => ({path, params, headers, method}),
              {item: 'params'},
              null,
              {item: 'headers'},
            )
          },
        }),
      },
      plugins: [
        vuexKeg({
          plugins: {
            request: vuexRequest({
              request(path, {params, headers, method}) {
                return Promise.resolve({path, params, headers, method})
              },
              requestConfig: {
                basePath: 'https://test.com',
                modules: {
                  auth: {
                    basePath: 'auth',
                    requests: {
                      test: {
                        path: 'moduleParams',
                        method: 'POST',
                      },
                    },
                  },
                  docs: {
                    basePath: ['docs', null],
                    requests: {
                      test: {
                        path: 'moduleParams',
                        method: 'POST',
                      },
                    },
                  },
                },
                requests: {
                  test: {
                    path: 'pathParams',
                    method: 'POST',
                  },
                  testFunction: (path, {params, headers}) => {
                    return Promise.resolve({path, params, headers})
                  },
                  testFunctionInObject: {
                    path: 'pathParams',
                    method: 'PUT',
                    request: (path, {params, headers, method}) => {
                      return Promise.resolve({path, params, headers, method})
                    },
                  },
                  testRequest: {},
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
    it('should request with function path', async () => {
      const result = await store.dispatch('testPathFunction')
      expect(result.path).to.equal('https://test.com/function/pathParams')
      expect(result.method).to.equal('POST')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.headers).to.deep.equal({item: 'headers'})
    })
    it('should request with default values', async () => {
      const result = await store.dispatch('testDefault')
      expect(result.path).to.equal('https://test.com')
      expect(result.method).to.equal('GET')
      expect(result.params).to.be.a('undefined')
      expect(result.headers).to.be.a('undefined')
    })
    it('should request with name request', async () => {
      const result = await store.dispatch('testNameRequest')
      expect(result.path).to.equal('https://test.com/pathParams')
      expect(result.method).to.equal('POST')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.headers).to.deep.equal({item: 'headers'})
    })
    it('should request with function', async () => {
      const result = await store.dispatch('testFunction')
      expect(result.path).to.equal('https://test.com')
      expect(result.method).to.equal('GET')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.headers).to.deep.equal({item: 'headers'})
    })
    it('should request with name & function request', async () => {
      const result = await store.dispatch('testFunctionRequest')
      expect(result.path).to.equal('https://test.com')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.headers).to.deep.equal({item: 'headers'})
    })
    it('should request with name, object & function request', async () => {
      const result = await store.dispatch('testFunctionInObjectRequest')
      expect(result.path).to.equal('https://test.com/pathParams')
      expect(result.method).to.equal('PUT')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.headers).to.deep.equal({item: 'headers'})
    })
    it('should request with name & module', async () => {
      const result = await store.dispatch('testModule')
      expect(result.path).to.equal('https://test.com/auth/moduleParams')
      expect(result.method).to.equal('POST')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.headers).to.deep.equal({item: 'headers'})
    })
    it('should request with name & module & array basePath', async () => {
      const result = await store.dispatch('testModuleArrayBasePath')
      expect(result.path).to.equal('https://test.com/docs/moduleParams')
      expect(result.method).to.equal('POST')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.headers).to.deep.equal({item: 'headers'})
    })
    it('should request with an object param', async () => {
      const result = await store.dispatch('testObject')
      expect(result.path).to.equal('https://test.com/pathParams')
      expect(result.method).to.equal('POST')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.headers).to.deep.equal({item: 'headers'})
    })
  })
  describe('test stage 2', () => {
    let store
    store = new Vuex.Store({
      state: {
        test: null,
      },
      actions: {
      ...keg({
        test({request}) {
          return request({
            path: 'pathParams',
            method: 'POST',
          }, {item: 'params'}, null, {item: 'headers'})
        },
        testError({request}) {
          return request(null, {item: 'params'}, null, {item: 'headers'})
        },
        testNoneModule({request}) {
          return request('test@module', {item: 'params'}, null, {item: 'headers'})
        },
      }),
      },
      plugins: [
        vuexKeg({
          plugins: {
            request: vuexRequest(),
          },
        }),
      ],
    })
    it('should work', async () => {
      const originalFetch = window.fetch
      window.fetch = (url, {body, headers, method}) => {
        return Promise.resolve({url, body, headers, method})
      }
      const result = await store.dispatch('test')
      expect(result.url).to.equal('pathParams')
      expect(result.method).to.equal('POST')
      expect(JSON.parse(result.body)).to.deep.equal({item: 'params'})
      expect(result.headers).to.deep.equal({
        'Content-Type': 'application/json',
        item: 'headers',
      })
      window.fetch = originalFetch
    })
    it('should not work with no pathInfo', async () => {
      let _error
      try{
        await store.dispatch('testError')
      }catch(error){
        _error = error
      }
      expect(_error).to.be.an('Error')
      expect(_error.message).to.include('firstArgs must exist')
    })
    it('should not work with no request config', async () => {
      let _error
      try{
        await store.dispatch('testNoneModule')
      }catch(error){
        _error = error
      }
      expect(_error).to.be.an('Error')
      expect(_error.message).to.include('there is no modules any moreis module')
    })
  })
  describe('test stage 3', () => {
    let store
    let beForeContext
    let beForeContextSe
    let beForePayload
    let beForePayloadSe
    let afterContext
    let afterPayload
    store = new Vuex.Store({
      state: {
        test: null,
        url: 'https://test.com',
      },
      actions: {
        ...keg({
          test({request}) {
            return request({
              path: 'pathParams',
              //method: 'POST',
            }, {item: 'params'}, null, {item: 'headers'})
          },
          testArrayRootBasePath({request}) {
            return request('test@auth', {item: 'params'}, null, {item: 'headers'})
          },
        }),
      },
      plugins: [
        vuexKeg({
          plugins: {
            request: vuexRequest({
              request: (path, {method, headers, params}) => (
                Promise.resolve({path, method, headers, params})
              ),
              beforeHook: [
                (context, payload) => {
                  beForeContext = context
                  beForePayload = payload
                  return payload
                },
                (context, payload) => {
                  beForeContextSe = context
                  beForePayloadSe = payload
                  return payload
                },
              ],
              afterHook: (context, payload) => {
                afterContext = context
                afterPayload = payload
                return payload
              },
              def: {
                method: 'POST',
              },
              requestConfig: {
                basePath: [({state}) => (state.url), 'next'],
                modules: {
                  auth: {
                    basePath: 'auth',
                    requests:{
                      test: {
                        path: 'moduleParams',
                        method: 'POST',
                      },
                    },
                  },
                },
              },
            }),
          },
        }),
      ],
    })
    it('should work with hooks', async () => {
      const result = await store.dispatch('test')
      expect(result.path).to.equal('https://test.com/next/pathParams')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.method).to.equal('POST')
      expect(result.headers).to.deep.equal({item: 'headers'})
      expect(beForeContext.rootState).to.be.a('object')
      expect(beForeContext.state).to.be.a('object')
      expect(beForeContext.getters).to.be.a('object')
      expect(beForeContext.commit).to.be.a('function')
      expect(beForeContext.dispatch).to.be.a('function')
      expect(beForePayload.path).to.equal('https://test.com/next/pathParams')
      expect(beForePayload.params).to.deep.equal({item: 'params'})
      expect(beForePayload.method).to.equal('POST')
      expect(beForePayload.headers).to.deep.equal({item: 'headers'})
      //
      expect(beForeContextSe.rootState).to.be.a('object')
      expect(beForeContextSe.state).to.be.a('object')
      expect(beForeContextSe.getters).to.be.a('object')
      expect(beForeContextSe.commit).to.be.a('function')
      expect(beForeContextSe.dispatch).to.be.a('function')
      expect(beForePayloadSe.path).to.equal('https://test.com/next/pathParams')
      expect(beForePayloadSe.params).to.deep.equal({item: 'params'})
      expect(beForePayloadSe.method).to.equal('POST')
      expect(beForePayloadSe.headers).to.deep.equal({item: 'headers'})
      //
      expect(beForeContextSe.rootState).to.be.a('object')
      expect(beForeContextSe.state).to.be.a('object')
      expect(beForeContextSe.getters).to.be.a('object')
      expect(beForeContextSe.commit).to.be.a('function')
      expect(beForeContextSe.dispatch).to.be.a('function')
      expect(beForePayloadSe.path).to.equal('https://test.com/next/pathParams')
      expect(beForePayloadSe.params).to.deep.equal({item: 'params'})
      expect(beForePayloadSe.method).to.equal('POST')
      expect(beForePayloadSe.headers).to.deep.equal({item: 'headers'})
      //
      expect(afterContext.rootState).to.be.a('object')
      expect(afterContext.state).to.be.a('object')
      expect(afterContext.getters).to.be.a('object')
      expect(afterContext.commit).to.be.a('function')
      expect(afterContext.dispatch).to.be.a('function')
      expect(afterPayload.path).to.equal('https://test.com/next/pathParams')
      expect(afterPayload.params).to.deep.equal({item: 'params'})
      expect(afterPayload.method).to.equal('POST')
      expect(afterPayload.headers).to.deep.equal({item: 'headers'})
    })
    it('should work test Array basePath at root', async () => {
      const result = await store.dispatch('testArrayRootBasePath')
      expect(result.path).to.equal('https://test.com/next/auth/moduleParams')
      expect(result.params).to.deep.equal({item: 'params'})
      expect(result.method).to.equal('POST')
      expect(result.headers).to.deep.equal({item: 'headers'})
    })
  })
  // describe('test stage 4 query support', () => {
  //   const mockQueries = {
  //     auth: `
  //       sign-in(email: "$email", password: "$password"){
  //         accessToken,
  //         refreshAccessToken,
  //         email,
  //       }
  //     `,
  //   }
  //   const store = new Vuex.Store({
  //     state: {
  //       test: null,
  //       url: 'https://test.com',
  //     },
  //     actions: {
  //       ...keg({}),
  //     },
  //     plugins: [
  //       vuexKeg({
  //         plugins: {
  //           request: vuexKeg({
  //             queryConfig: {
  //               basePath: ({state}) => (state.url),
  //               queries: mockQueries,
  //             },
  //           }),
  //         },
  //       }),
  //     ],
  //   })
  //   it('should work with query')
  // })
})
