#ifndef ORDERS_H
#define ORDERS_H
#include "common.h"

Order pq[MAX];
int n = 0;

int orderExists(int id) {
    for (int i = 0; i < n; i++)
        if (pq[i].orderID == id)
            return 1;
    return 0;
}

void insertOrder(int id, int priority) {
    if (n == MAX) {
        printf("Order Queue Full!\n");
        return;
    }
    if (orderExists(id)) {
        printf("⚠️ Order ID %d already exists!\n", id);
        return;
    }
    pq[n].orderID = id;
    pq[n].priority = priority;
    n++;
    printf("Order %d added with priority %d\n", id, priority);
}

void displayOrders() {
    if (n == 0) {
        printf("No active orders.\n");
        return;
    }
    printf("\n--- Active Orders ---\n");
    for (int i = 0; i < n; i++)
        printf("Order ID: %d | Priority: %d\n", pq[i].orderID, pq[i].priority);
}

#endif
