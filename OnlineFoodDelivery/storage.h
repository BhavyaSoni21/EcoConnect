#ifndef STORAGE_H
#define STORAGE_H
#include "common.h"

int hashTable[TABLE_SIZE];

int hashFunc(int key) { return key % TABLE_SIZE; }

int searchOrderIndex(int id) {
    int index = hashFunc(id);
    int startIndex = index;
    while (hashTable[index] != 0) {
        if (hashTable[index] == id)
            return index;
        index = (index + 1) % TABLE_SIZE;
        if (index == startIndex) break;
    }
    return -1;
}

void insertOrderID(int id) {
    if (searchOrderIndex(id) != -1) {
        printf("⚠️ Order ID %d already exists.\n", id);
        return;
    }
    int index = hashFunc(id);
    int startIndex = index;
    while (hashTable[index] != 0) {
        index = (index + 1) % TABLE_SIZE;
        if (index == startIndex) {
            printf("Order Storage Full!\n");
            return;
        }
    }
    hashTable[index] = id;
    printf("✅ Order ID %d registered successfully.\n", id);
}

void searchOrderID(int id) {
    int index = searchOrderIndex(id);
    if (index != -1)
        printf("🔎 Order ID %d found.\n", id);
    else
        printf("❌ Order ID %d not found.\n", id);
}

#endif
