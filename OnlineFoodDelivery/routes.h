#ifndef ROUTES_H
#define ROUTES_H
#include "common.h"

int graph[V][V] = {
    {0, 10, 0, 30, 100},
    {10, 0, 50, 0, 0},
    {0, 50, 0, 20, 10},
    {30, 0, 20, 0, 60},
    {100, 0, 10, 60, 0}
};

void dijkstra(int start) {
    int cost[V][V], distance[V], visited[V] = {0};
    int count, minDistance, nextNode, i, j;

    for (i = 0; i < V; i++)
        for (j = 0; j < V; j++)
            cost[i][j] = (graph[i][j] == 0) ? INF : graph[i][j];

    for (i = 0; i < V; i++)
        distance[i] = cost[start][i];

    visited[start] = 1;
    distance[start] = 0;

    for (count = 1; count < V - 1; count++) {
        minDistance = INF;
        for (i = 0; i < V; i++)
            if (distance[i] < minDistance && !visited[i]) {
                minDistance = distance[i];
                nextNode = i;
            }
        visited[nextNode] = 1;
        for (i = 0; i < V; i++)
            if (!visited[i])
                if (minDistance + cost[nextNode][i] < distance[i])
                    distance[i] = minDistance + cost[nextNode][i];
    }

    printf("\n📍Shortest distances from Zone %c:\n", start + 'A');
    for (i = 0; i < V; i++) {
        printf("To Zone %c : ", i + 'A');
        if (distance[i] == INF)
            printf("No path\n");
        else
            printf("%d units\n", distance[i]);
    }
}

#endif
