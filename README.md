# 🛒 Keupang – 쿠팡 클론 프로젝트

<p align="center">
  <img src="https://keupang.store/og-image.jpg" alt="Keupang Logo" width="300" />
</p>

---
<br/>

## 🗂️ 프로젝트 정보

- **진행 단체**: 개인 프로젝트  
- **개발 기간**: 2024.12 ~ 2025.04 (진행 중)  
- **주요 목적**: 실사용 가능한 이커머스 플랫폼을 직접 설계하고,  
  성능, SEO, 테스트 커버리지 등 **실전 수준의 품질 개선**까지 경험하기 위한 실습 프로젝트


---
<br/>

## 🚀 배포 주소

- **메인 웹사이트**: [https://keupang.store](https://keupang.store)
- GitHub 주소: [https://github.com/keupang/keupang-frontend](https://github.com/keupang/keupang-frontend)


---
<br/>

## 🧑‍💻 팀 소개

| 이름 | GitHub | 역할 | 소속 |
|------|--------|------|------|
| 이태헌 | [forever2969](https://github.com/forever2969) | 프론트엔드 개발 / 성능 최적화 / 테스트 커버리지 설계 | 금오공과대학교 컴퓨터공학과 졸업 |


---
<br/>

## 🚀 시작 가이드

### Requirements

- [Node.js 20.19.0 이상](https://nodejs.org/en/)
- [Yarn 1.22.19](https://classic.yarnpkg.com/lang/en/docs/install/)
- [Vite 5.4.10](https://vitejs.dev/)
- [React 18.3.1](https://ko.react.dev/)
- [TypeScript 5.7.2](https://ts.dev/)
- 

### Installation

```bash
$ git clone https://github.com/keupang/keupang-frontend.git
$ cd keupang-frontend
$ yarn install
$ yarn dev
```

### 배포 확인 플로우 (개발자 기준)

1. `main` 또는 `prod` 브랜치로부터 프로젝트를 clone 받음
2. 로컬 환경에서 정상적으로 빌드되는지 확인
3. PR을 `prod` 브랜치로 보낼 경우 GitHub Actions를 통해 자동 배포 진행
4. 배포 완료 후 [https://keupang.store](https://keupang.store) 에서 정상 동작 확인

---
<br/>

## 💡 프로젝트 소개

> Keupang은 쿠팡을 클론한 이커머스 프로젝트로,  
> 상품 검색, 필터, 장바구니, 로그인/회원가입 기능을 포함한 쇼핑몰 웹사이트입니다.

👉 단순 구현을 넘어, **실제 사용자 경험과 운영까지 고려한 실전 프로젝트**입니다.


---
<br/>

## 🛠️ 기술 스택 (Tech Stack)

| 분류 | 사용 기술 |
|------|-----------|
| **Environment** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
| **Development** | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white) ![React Query](https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white) ![Emotion](https://img.shields.io/badge/Emotion-C865D0?style=for-the-badge&logo=emotion&logoColor=white) |
| **Testing** | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white) ![React Testing Library](https://img.shields.io/badge/Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![MSW](https://img.shields.io/badge/MSW-FF6A6A?style=for-the-badge) |
| **Deploy** | ![AWS](https://img.shields.io/badge/AWS_S3-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white) ![CloudFront](https://img.shields.io/badge/CloudFront-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white) |
| **Etc** | ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |


---
<br/>

## 🖼️ 화면 구성

| 메인 페이지 | 카테고리별 상품 목록 페이지 |
|-------------|-----------------------------|
| ![image](https://github.com/user-attachments/assets/7acf44e4-2c68-47e4-92a1-c73569b54c25) | ![image](https://github.com/user-attachments/assets/674a9b2d-4f65-435a-82bc-a73b74dbf598) |

| 상품 상세 페이지 | 회원가입 페이지 |
|------------------|------------------|
| ![image](https://github.com/user-attachments/assets/61ee8a06-9ddc-43ec-b938-158c64f71f04) | ![image](https://github.com/user-attachments/assets/1edbf9d3-1f3e-4fd3-a6f4-9e09f0e856fb) |


---
<br/>

## 📦 주요 기능

### 🔍 상품 검색 및 필터링
- 상품명, 카테고리, 가격 범위로 조건별 검색 가능
- 무한 스크롤 기반 로딩 및 Skeleton UI
<img src="https://github.com/user-attachments/assets/7d743531-c703-437b-a571-0049bbf853bc" />

<img src="https://github.com/user-attachments/assets/2087dda9-57f8-4037-aa08-daef4c3ef935" />


### 🧠 사용자 경험(UX) 중심 개선
- LCP 이미지 `eager + fetchPriority=high` 적용
- WebP 변환 및 렌더링 순서 제어로 **LCP 1,450ms → 1,050ms (27.5% 개선)**  
- 이미지 로드시간 **140ms → 40ms (71% 개선)**
<img src="https://github.com/user-attachments/assets/c9598b44-bc55-413b-be10-d1e1e33d6c72" width="450"/>


### 🌐 검색엔진 최적화 (SEO)
- SEO 점수 **82점 → 100점**
- `react-helmet-async` 활용 페이지별 메타태그 적용
- CloudFront 404 → index.html 라우팅 설정으로 SPA 동작 보완
- SNS og:image 미리보기 설정
<div>
  <div><img src="https://github.com/user-attachments/assets/c1305559-f91f-4e8b-98d2-67f9904dfd32" width="450"/></div>
  <div>⬇</div>
  <div><img src="https://github.com/user-attachments/assets/6542def8-fb1b-4f15-84b0-ef6ed0451e51" width="450"/></div>
</div>


### 🧪 테스트 환경 구축 & 커버리지 개선
- `Vitest + React Testing Library`로 유닛 테스트 작성
- `MSW`로 비동기 API 통신 모킹하여 테스트 독립성 확보
- `Istanbul` 기반 커버리지 측정 → **1차 측정 53%, 목표 70% 이상**

#### 1차 측정
| 디렉토리 | Statements | Branches | Functions | Lines |
|----------|------------|----------|-----------|--------|
| **전체 (All files)** | **53.51%** | **14.18%** | **52.53%** | **52.51%** |
| `src/components` | 11.21% | 13.85% | 17.19% | 11.42% |
| `src/apis` | 0.00% | 0.00% | 0.00% | 0.00% |
| `src/pages` | 0.00% | 0.00% | 0.00% | 0.00% |
| `src/hooks` | 79.06% | 55.55% | 84.61% | 79.33% |
| `src/hooks/__tests__` | 99.39% | 100.00% | 98.51% | 99.66% |
| `src/utils` | 77.27% | 82.35% | 84.61% | 76.74% |
