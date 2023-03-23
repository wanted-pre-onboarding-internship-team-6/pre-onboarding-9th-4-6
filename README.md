# 원티드 프리온보딩 인턴십 4주차 기업과제 - 스위치원

## 📜 목차

1. [과제 소개](#-과제-소개)
2. [실행 방법](#%EF%B8%8F-실행-방법)
3. [배포 링크](#-배포-링크)
4. [기술 스택](#-#%EF%B8%8F-기술-스택)
5. [폴더 구조](#-폴더-구조)
6. [모범 사례](#-모범-사례)
7. [협업 방식](#-협업-방식)
8. [팀 구성원](#-팀-구성원)

<!--  -->
<br />

## 📝 과제 소개

### **진행 기간: 2023.03.19 ~ 2023.03.23 (5일)**

> **핀테크 스타트업 스위치온의 주문내역 관리 어드민 페이지 구현 과제**

### 요구 사항

1. 주어진 데이터를 이용하여 주문 목록 페이지를 구현해주세요
   - 주문 목록 페이지에는 주문에 대한 모든 정보를 표 형태로 확인할 수 있어야 합니다.
   - 주문 목록은 페이지네이션이 구현되어야 합니다(한 페이지에 50건의 주문이 보여야 합니다)
   - 데이터 중에서 오늘의 거래건만 보여지도록 해주세요
     - 여기서 오늘은 **2023-03-08**일을 의미합니다.
2. 정렬 기능을 구현해주세요
   - 기본 정렬은 ID 기준 오름차순으로 구현해주세요
   - 표에서 `주문번호`, `거래일 & 거래시간` 버튼을 누르면 각각 내림차순 정렬이 되도록 해주세요
3. 주문 처리 상태에 따라 filtering 기능을 구현해주세요
4. 고객이름을 검색할 수 있도록 해주세요
5. 서버에 들어온 주문을 5초마다 최신화 해주세요
   - 서버 API는 구현되어 있지 않지만, 구현되어 있다는 가정 하에 요구사항을 충족해주세요
6. 컴포넌트에 대한 **테스트 코드**를 구현해주세요

<!--  -->
<br />

## 🕹️ 실행 방법

```sh
$ git clone https://github.com/wanted-pre-onboarding-internship-team-6/pre-onboarding-9th-4-6.git
$ cd pre-onboarding-9th-4-6
$ npm install
$ npm run dev
```

<!--  -->
<br />

## 🔗 배포 링크

[바로 가기](https://pre-onboarding-9th-4-6.vercel.app)

<!--  -->
<br />

## 🛠️ 기술 스택

<!--
  Shield.io 배지 양식

  <img src= "https://img.shields.io/badge/라벨-색상?style=배지스타일&logo=로고이름&logoColor=로고색상">

  - 라벨: 임의의 이름
  - 색상: https://simpleicons.org/ 에서 검색한 로고의 색상코드 (# 제외하고 입력)
  - 배지 스타일: plastic, flat, flat-square, for-the-badge, social 중 하나 선택
  - 로고 이름: https://simpleicons.org/ 에서 검색한 로고의 이름
  - 로고 색상: 로고의 색상코드
-->
<p>
<!-- npm -->
<img src= "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
<!-- Vite -->
<img src= "https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<!-- Typescript -->
<img src= "https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<!-- React -->
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<!-- React Router -->
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<!-- React Query -->
<img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<!-- Axios -->
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<!-- emotion -->
<img src="https://img.shields.io/badge/emotion-D26AC2?style=for-the-badge&logoColor=white">
<!-- Husky -->
<img src= "https://img.shields.io/badge/husky-000000?style=for-the-badge&logoColor=white"> 
<!-- ESLint -->
<img src= "https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> 
<!-- Prettier -->
<img src= "https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black"> 
<!-- Vercel -->
<img src= "https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<!-- GitHub -->
<img src= "https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<!-- Discord -->
<img src= "https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
<!-- notion -->
<img src= "https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
</p>
<!-- 선택사항: 각 기술의 선정 이유 -->

- `Vite` : 빠른 번들링 속도와 네이티브 ESM 사용 등으로 빠르고 효율적인 웹 개발을 가능하게 함.
- `React-query` : `useQuery`를 이용한 간편한 `fetching`, 서버 데이터 캐싱, `refetchInterval`을 통한 서버 데이터 최신화, `suspense`와 `useQueryErrorResetBoundary` 지원
- `React-router-dom` : `useSearchParams` 를 사용하여 `filter`, `sort`, `search` 기능에 필요한 상태를 URL을 이용해 구현
- `typescript`: 정적 타입 검사와 타입 추론을 통해 코드 안정성과 품질을 높이고 개발 생산성을 향상시켜 유지보수성을 확보

  <!--  -->
  <br />

## 📂 폴더 구조

<!--
  file-tree-generator(VSCode Extension) 설치
  => 파일 탐색기에서 우클릭
  => Generate to Tree 클릭
  => 복사 및 붙여넣기
-->

```
📦src
 ┣ 📂api
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜order.ts
 ┣ 📂components
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜Layout.tsx
 ┃ ┣ 📜OrderTable.tsx
 ┃ ┣ 📜OrderTableBody.tsx
 ┃ ┣ 📜OrderTableErrorFallback.tsx
 ┃ ┗ 📜OrderTableLoader.tsx
 ┣ 📂constants
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜useOrders.ts
 ┃ ┗ 📜useQueryString.ts
 ┣ 📂pages
 ┃ ┣ 📜ErrorPage.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂styles
 ┃ ┗ 📜resetCss.ts
 ┣ 📂test
 ┃ ┣ 📂__snapshots__
 ┃ ┃ ┗ 📜App.test.tsx.snap
 ┃ ┣ 📜App.test.tsx
 ┃ ┗ 📜setup.ts
 ┣ 📂types
 ┃ ┗ 📜order.ts
 ┣ 📂utils
 ┃ ┣ 📜debounce.ts
 ┃ ┣ 📜delay.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜throwErrorAtChance.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┣ 📜Router.tsx
 ┗ 📜vite-env.d.ts
```

<!--  -->
 <br />

## 🥇 모범 사례

### 쿼리스트링 사용

현재 페이지, 정렬 기준, 정렬 순서(오름차순, 내림차순), 주문 처리 상태와 검색 키워드를 쿼리스트링으로 저장해 관리했습니다.

### useQueryString

`useSeachParams`가 이미 추상화되어있는 훅이지만 여러 쿼리스트링을 추가, 삭제시 생기는 코드 중복을 해결하기위해 `useQueryString`으로 한단계 더 추상화시켰습니다.

### React query 사용

`useQuery`의 `refetchInterval`을 5초로 지정해 5초마다 주문 데이터를 최신화하도록 했습니다.

### Suspense와 react-error-boundary

`Suspense`와 `ErrorBoundary`를 이용래 로딩, 에러 상태를 선언적으로 관리하고, 에러 발생시 UI에 재시도 버튼을 만들어 에러를 초기화할 수 있도록 했습니다.

### 서버 API가 구현된듯이 코드 구현

서버 API가 구현되어있는 것처럼 하기 위해 데이터 fetch 레이어에서 쿼리 스트링의 페이지 번호, 정렬 기준, 정렬 순서를 사용해 데이터를 가공하고 반환했습니다.

### 디바운스 적용

고객 이름 검색창에 디바운스를 적용해서 검색어 입력시의 API 호출 횟수를 줄였습니다.

```ts
export default function debounce<T extends (...args: any[]) => void>(
  callback: T,
  timeout: number,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: Parameters<T>): void {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, args), timeout);
  };
}
```

### 9가지 테스트 적용

- OrderTable 컴포넌트 렌더링 상태 검사
- OrderTable 컴포넌트 select 요소 렌더링 상태 검사
- 페이지네이션 버튼 작동 상태 검사
- 버튼 개수가 페이지 개수가 일치하는 지 검사
- 현재 페이지를 나타내는 버튼이 비활성화 되는지 검사
- 사용자가 5번 페이지 눌렀을때, 5번 페이지로 이동하는 함수가 작동하는지 검사
- mockDatas의 데이터들이 테이블 요소에 렌더링 되는지 검사
- 주문목록 데이터 객체의 타입 검사
- mockDatas의 transaction_time에 2023-03-08이 포함 된 데이터 수 검사

<br />

## 🤝 협업 방식

### 1. 요구사항 분석

과제의 요구사항을 분석하고 세세한 항목으로 나눠 분류합니다.

### 2. 이슈 발행

분석한 요구사항을 기간에 맞게 분배한 후 각 날짜에 해당하는 ([이슈](https://github.com/wanted-pre-onboarding-internship-team-6/pre-onboarding-9th-4-6/issues))를 생성합니다.

### 3. 구현 & PR

각자 해당 날짜의 이슈를 코드로 구현하고 커밋([git 컨벤션](https://github.com/wanted-pre-onboarding-internship-team-6/pre-onboarding-9th-4-6/blob/main/.gitmessage.txt))하고 ([PR](https://github.com/wanted-pre-onboarding-internship-team-6/pre-onboarding-9th-4-6/pulls))을 올립니다.

### 4. 코드 리뷰

각자의 PR을 보며 코드 리뷰를 합니다.

### 5. 모범 사례 선정

요구사항을 기록한 이슈에서 해당 이슈의 모범 사례라고 생각하는 PR의 번호를 작성해 투표합니다.  
모범 사례에 가장 가까운 PR을 선정하고 다른 PR의 모범 사례를 적용해 부족한 점을 보완합니다.

### 6. Merge

보완한 코드로 PR을 올려 Merge 하고 다음 요구사항 이슈에 대해 반복합니다.

<!-- <table>
  <tbody>
    <tr>
      <td style="font-weight: bold">build</td>
      <td>CI configuration 파일 또는 scripts의 변경사항</td>
    </tr>
    <tr>
      <td style="font-weight: bold">ci</td>
      <td>빌드 시스템이나 외부 의존성에 영향을 미치는 변경사항</td>
    </tr>
    <tr>
      <td style="font-weight: bold">config</td>
      <td>설정 관련 파일 작성 또는 변경</td>
    </tr>
    <tr>
      <td style="font-weight: bold">docs</td>
      <td>문서 변경사항</td>
    </tr>
    <tr>
      <td style="font-weight: bold">feat</td>
      <td>새로운 기능 추가</td>
    </tr>
    <tr>
      <td style="font-weight: bold">fix</td>
      <td>버그 수정</td>
    </tr>
    <tr>
      <td style="font-weight: bold">perf</td>
      <td>성능을 향상시키는 변경사항</td>
    </tr>
    <tr>
      <td style="font-weight: bold">refactor</td>
      <td>기능 추가나 버그 수정이 아닌 변경 사항</td>
    </tr>
    <tr>
      <td style="font-weight: bold">remove</td>
      <td>코드나 파일 제거</td>
    </tr>
    <tr>
      <td style="font-weight: bold">style</td>
      <td>스타일(CSS) 변경사항</td>
    </tr>
  </tbody>
</table> -->

<!--  -->
<br />

## 👥 팀 구성원

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/ggongjukim"><img src="https://avatars.githubusercontent.com/u/75241542?v=4" width="100px;"/><br /><sub><b>김채현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/bymine"><img src="https://avatars.githubusercontent.com/u/71866185?v=4" width="100px;" /><br /><sub><b>박수빈</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/pji0219"><img src="https://avatars.githubusercontent.com/u/66911726?v=4" width="100px;" /><br /><sub><b>박종익</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/dong-geon-Lee"><img src="https://avatars.githubusercontent.com/u/71866185?v=4" width="100px;" /><br /><sub><b>이동건</b></sub></a><br /></td>
    <tr></tr>
      <td align="center"><a href="https://github.com/dlwnstjrzz"><img src="https://avatars.githubusercontent.com/u/95525638?v=4" width="100px;" /><br /><sub><b>이준석</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Chun-gu"><img src="https://avatars.githubusercontent.com/u/60649092?v=4" width="100px;" /><br /><sub><b>이춘구</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/theo-jin"><img src="https://avatars.githubusercontent.com/u/83561523?v=4" width="100px;" /><br /><sub><b>진형빈</b></sub></a><br /></t>
      <td align="center"><a href="https://github.com/Sungrinhan"><img src="https://avatars.githubusercontent.com/u/78065205?v=4" width="100px;" /><br /><sub><b>한성린</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

[🔺 목차로 돌아가기](#-목차)
