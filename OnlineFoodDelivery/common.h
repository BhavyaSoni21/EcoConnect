#ifndef COMMON_H
#define COMMON_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#define MAX 10
#define SIZE 5
#define TABLE_SIZE 10
#define INF 999
#define V 5

typedef struct {
    int orderID;
    int priority; // 1 - High, 2 - Medium, 3 - Low
} Order;

typedef struct customer {
    int id;
    char name[30];
    struct customer *next;
} Customer;

#endif
