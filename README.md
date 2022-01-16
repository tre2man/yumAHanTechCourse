# 염아한 테크코스 결과물

## 설명
graphql을 이용한 서버입니다. 

Rest API와의 차이점은 사용자가 받을 데이터를 조정할 수 있고, 스키마를 쉽게 확인할 수 있습니다.

기존의 Rest API의 GET 명령은 Query, 나머지 동작은 모두 Mutation으로 통일됩니다.

### GraphQL 사용법

1. localhost:5500/graphql 을 접속한다.
2. 오른쪽 버튼을 누르면 스키마가 튀어나온다.
3. 원하는 명령을 playground에 입력한다.

## 구현한 것

1. 회원가입
2. 로그인 (JWT 토큰 사용)
3. 로그아웃 (Header에 토큰을 담지 않으면 자동 로그아웃!)
4. 로그인한 사용자만 게시글 작성 가능
5. 비밀번호 암호화
6. 모든 유저 게시글 열람 가능
7. 게시글 조회 페이지네이션 (페이지 크기는 5)
8. 게시글의 수정이나 삭제는 해당 게시글 생성한 회원만 가능
9. DB는 sqlite 사용

## 엔드포인트 (GraphQL은 스키마) 설명

mutation

회원가입
signUp(email, password)
로그인
signIn(email, password)
글쓰기
createPost(title, content)
글수정
updatePost(postId, updatePostInput: {title, content})
글삭제
deletePost (postId)


query

유저 찾기
findUser(email)
페이지로 포스트 불러오기
getPostByPage(pageNum)
모든 포스트 불러오기
getAllPage

## 인증 로직 사용법

signUp 또는 signIn을 하게 되면 반환값으로 토큰이 나오게 된다. 이를 HTTP HEADER에 {"authorization" : "Bearer 토큰"} 형식으로 담아서 보내주면 된다.