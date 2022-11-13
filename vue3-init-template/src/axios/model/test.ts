import axios from '@/axios/request'

namespace Test {
  export interface TestRequset {
    aa: string;
    bb: string;
  }
  export interface TestReponse {
    aa: string,
    bb: string
  }
}

export const test = (params: Test.TestRequset) => {
  return axios.post<Test.TestReponse>('/test', params)
}