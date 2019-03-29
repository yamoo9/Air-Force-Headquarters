import Vue from 'vue'

// lodash 패키지 설치 필요
// $ yarn add lodash
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// require.context는 webpack에서 지원하는 함수
// https://webpack.js.org/guides/dependency-management/#requirecontext
const requireComponent = require.context(
  // 컴포넌트들이 있는 폴더
  '@/components',
  // 하위 폴더까지 포함할 지 여부
  false,
  // 기본 컴포넌트를 찾는데 사용할 정규표현식
  /app[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
  // 컴포넌트 설정 가져오기
  const componentConfig = requireComponent(fileName)

  // 컴포넌트의 파스칼 표기법 이름 가져오기
  const componentName = upperFirst(
    camelCase(
      // 파일이름 앞의 `./` 등 파스칼 표기법 이름에
      // 들어갈 필요없는 기호들을 제거
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // 컴포넌트를 전역적으로 등록
  Vue.component(
    componentName,
    // `export default`를 이용한 컴포넌트는 `.default`로 컴포넌트
    // 옵션을 추출하고 그렇지 않은 컴포넌트는 모듈의 루트를 호출
    componentConfig.default || componentConfig
  )
})
