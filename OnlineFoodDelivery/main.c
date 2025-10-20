#include "orders.h"
#include "history.h"
#include "customers.h"
#include "routes.h"
#include "storage.h"

int main() {
    int choice, id, priority, startZone;
    char name[30];

    while (1) {
        printf("\n===============================================\n");
        printf("      ONLINE FOOD DELIVERY QUEUE SYSTEM\n");
        printf("===============================================\n");
        printf("1. Add Order\n");
        printf("2. View Orders\n");
        printf("3. Add Delivered Order\n");
        printf("4. View Delivery History\n");
        printf("5. Add Customer Profile\n");
        printf("6. View Customer Profiles\n");
        printf("7. Show Shortest Delivery Paths\n");
        printf("8. Insert Order ID\n");
        printf("9. Search Order by ID\n");
        printf("0. Exit\n");
        printf("==============================================\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: 
                printf("Enter Order ID and Priority: ");
                scanf("%d %d", &id, &priority);
                insertOrder(id, priority);
                break;
            case 2: displayOrders(); break;
            case 3: 
                printf("Enter Delivered Order ID: ");
                scanf("%d", &id);
                addHistory(id);
                break;
            case 4: displayHistory(); break;
            case 5:
                printf("Enter Customer ID and Name: ");
                scanf("%d %s", &id, name);
                addCustomer(id, name);
                break;
            case 6: displayCustomers(); break;
            case 7:
                printf("Enter starting zone (0-A, 1-B, 2-C, 3-D, 4-E): ");
                scanf("%d", &startZone);
                dijkstra(startZone);
                break;
            case 8:
                printf("Enter Order ID to register: ");
                scanf("%d", &id);
                insertOrderID(id);
                break;
            case 9:
                printf("Enter Order ID to search: ");
                scanf("%d", &id);
                searchOrderID(id);
                break;
            case 0:
                printf("\n🌟 Thank you for using the Online Food Delivery Queue System!\n");
                exit(0);
            default:
                printf("Invalid choice! Try again.\n");
        }
    }
    return 0;
}
