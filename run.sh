docker stop $(docker ps -aq)                      # 도커 컨테이너 전체 멈춤
docker rm $(docker ps -aq)                      # 도커 컨테이너 전체 삭제
docker rmi $(docker images -q)                    # 도커 이미지파일 전체 삭제
docker build -f Dockerfile --tag yum-techo . # 새로운 도커 이미지 생성
docker run -d -p5000:5000 yum-techo              # 5000번 포트로 접속할 수 있는 도커 이미지 실행하기
