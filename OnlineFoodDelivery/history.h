#ifndef HISTORY_H
#define HISTORY_H
#include "common.h"

int history[SIZE], front = -1, rear = -1;

int historyExists(int id) {
    if (front == -1) return 0;
    int i = front;
    do {
        if (history[i] == id) return 1;
        i = (i + 1) % SIZE;
    } while (i != (rear + 1) % SIZE);
    return 0;
}

void addHistory(int id) {
    if (historyExists(id)) {
        printf("⚠️ Order %d already in history!\n", id);
        return;
    }
    if ((rear + 1) % SIZE == front) {
        printf("History Full!\n");
        return;
    }
    if (front == -1) front = 0;
    rear = (rear + 1) % SIZE;
    history[rear] = id;
    printf("Order %d moved to history.\n", id);
}

void displayHistory() {
    if (front == -1) {
        printf("No delivery history.\n");
        return;
    }
    printf("\n--- Delivered Orders ---\n");
    int i = front;
    do {
        printf("Order ID: %d\n", history[i]);
        i = (i + 1) % SIZE;
    } while (i != (rear + 1) % SIZE);
}

#endif
