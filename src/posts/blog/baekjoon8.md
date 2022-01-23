---
title: "2583번"
category: "BaekJoon"
date: "2022-01-21 16:44:00 +09:00"
desc: "영역구하기"
thumbnail: "./images/baekjoon/baekjoon.jpg"
alt: "markdown logo"
---


## 문제
눈금의 간격이 1인 M×N(M,N≤100)크기의 모눈종이가 있다. 이 모눈종이 위에 눈금에 맞추어 K개의 직사각형을 그릴 때, 이들 K개의 직사각형의 내부를 제외한 나머지 부분이 몇 개의 분리된 영역으로 나누어진다.

예를 들어 M=5, N=7 인 모눈종이 위에 <그림 1>과 같이 직사각형 3개를 그렸다면, 그 나머지 영역은 <그림 2>와 같이 3개의 분리된 영역으로 나누어지게 된다.



<그림 2>와 같이 분리된 세 영역의 넓이는 각각 1, 7, 13이 된다.

M, N과 K 그리고 K개의 직사각형의 좌표가 주어질 때, K개의 직사각형 내부를 제외한 나머지 부분이 몇 개의 분리된 영역으로 나누어지는지, 그리고 분리된 각 영역의 넓이가 얼마인지를 구하여 이를 출력하는 프로그램을 작성하시오.

## 입력
첫째 줄에 M과 N, 그리고 K가 빈칸을 사이에 두고 차례로 주어진다. M, N, K는 모두 100 이하의 자연수이다. 둘째 줄부터 K개의 줄에는 한 줄에 하나씩 직사각형의 왼쪽 아래 꼭짓점의 x, y좌표값과 오른쪽 위 꼭짓점의 x, y좌표값이 빈칸을 사이에 두고 차례로 주어진다. 모눈종이의 왼쪽 아래 꼭짓점의 좌표는 (0,0)이고, 오른쪽 위 꼭짓점의 좌표는(N,M)이다. 입력되는 K개의 직사각형들이 모눈종이 전체를 채우는 경우는 없다.

## 출력
첫째 줄에 분리되어 나누어지는 영역의 개수를 출력한다. 둘째 줄에는 각 영역의 넓이를 오름차순으로 정렬하여 빈칸을 사이에 두고 출력한다.

    #include <iostream> 
    #include <string>
    #include <algorithm> 
    #include <queue>
    #include <cstring>

    using namespace std; 

    int dx[4] = {0,0,-1,1};
    int dy[4] = {1,-1,0,0};

    int main(void) { 
        cin.tie(NULL); 
        
        int row, col ;
        int num;
        cin >> row >> col >> num;

        int visited[row][col] = {0,};
        memset(visited, 0, sizeof(visited));

        vector<int> x1 ;
        vector<int> x2 ;
        vector<int> y1 ;
        vector<int> y2 ;

        for(int i = 0 ; i < num ; i++) {
            int tempx1, tempy1, tempx2, tempy2;
            cin >> tempx1 >> tempy1 >> tempx2 >> tempy2;
            x1.push_back(tempx1);
            y1.push_back(tempy1);
            x2.push_back(tempx2);
            y2.push_back(tempy2);
        }
        
        for(int i = 0 ; i < num ; i++) {

            queue<pair<int,int>> q;

            q.push({y1[i],x1[i]});
            visited[y1[i]][x1[i]] = 1;


            while(!q.empty()) {
                int nodey = q.front().first;
                int nodex = q.front().second;
                q.pop();

                for(int m = 0; m < 4 ; m++) {
                    int tempx = nodex + dx[m];
                    int tempy = nodey + dy[m];
                    if(tempx >= x1[i] && tempx <= x2[i]-1 && tempy >= y1[i] && tempy <= y2[i]-1
                        && visited[tempy][tempx] <= i) {
                        visited[tempy][tempx]++;
                        q.push({tempy, tempx});
                    }
                }
            }
        }

        vector<int> answer;
        int area = 0;
        for(int i = 0 ; i < row ; i++) {
            for(int j = 0 ; j < col ; j++) {

                if(visited[i][j] != 0) continue;
                area++;
                
                queue<pair<int,int>> q;
                q.push({i,j});
                visited[i][j] = 1;

                int area_count = 1;
                
                while(!q.empty()) {
                    int nodey = q.front().first;
                    int nodex = q.front().second;
                    q.pop();

                    for(int k = 0 ; k < 4 ; k++) {
                        int tempy = nodey + dy[k];
                        int tempx = nodex + dx[k];
                        if(tempy >= 0 && tempy <= row-1 && tempx >= 0 && tempx <= col-1
                            && visited[tempy][tempx] == 0) {
                                visited[tempy][tempx] = 1;
                                q.push({tempy, tempx});
                                area_count++;
                            }
                    }
                }
            answer.push_back(area_count);
            }
        }
        
        sort(answer.begin(), answer.end(), less<int>());
        cout << area << endl;
        for(int i = 0 ; i < area ; i++)
            cout << answer[i] << " ";

        return 0; 
    }