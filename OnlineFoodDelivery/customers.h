#ifndef CUSTOMERS_H
#define CUSTOMERS_H
#include "common.h"

Customer *head = NULL;

int customerExists(int id, char name[]) {
    Customer *temp = head;
    while (temp != NULL) {
        if (temp->id == id) return 1;
        if (strcmp(temp->name, name) == 0) return 2;
        temp = temp->next;
    }
    return 0;
}

void addCustomer(int id, char name[]) {
    int check = customerExists(id, name);
    if (check == 1) {
        printf("⚠️ Customer ID %d already exists!\n", id);
        return;
    } else if (check == 2) {
        printf("⚠️ Customer name '%s' already exists!\n", name);
        return;
    }
    Customer *newNode = (Customer *)malloc(sizeof(Customer));
    newNode->id = id;
    strcpy(newNode->name, name);
    newNode->next = head;
    head = newNode;
    printf("Customer '%s' added with ID %d.\n", name, id);
}

void displayCustomers() {
    if (head == NULL) {
        printf("No customers available.\n");
        return;
    }
    Customer *temp = head;
    printf("\n--- Customer Profiles ---\n");
    while (temp != NULL) {
        printf("ID: %d | Name: %s\n", temp->id, temp->name);
        temp = temp->next;
    }
}

#endif
