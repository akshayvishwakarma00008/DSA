// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// eg - 2 -> 4 -> 5
//     5-> 6 -> 7
//     Output - 7 -> 0 -> 8

//     Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
#include <stdio.h>
struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *head = NULL;

struct ListNode *reverseList(struct ListNode *head)
{
    struct ListNode *prev = NULL;
    struct ListNode *curr = head;
    struct ListNode *next = NULL;

    while (curr != NULL)
    {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

//NON - OPTIMAL FUNCTION
// struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2)
// {
//     struct ListNode *p = NULL;
//     struct ListNode *lastNodePointer = NULL;
//     int sum = 0, num1 = 0, num2 = 0;
//     l1 = reverseList(l1);
//     l2 = reverseList(l2);

//     while (l1 != NULL)
//     {
//         num1 = num1 * 10 + l1->val;
//         l1 = l1->next;
//     }
//     while (l2 != NULL)
//     {

//         num2 = num2 * 10 + l2->val;
//         l2 = l2->next;
//     }
//     sum = num1 + num2;
//     if (sum == 0){
//         struct ListNode *temp = (struct ListNode *)malloc(sizeof(struct ListNode));
//         temp->next = NULL;
//         temp->val = 0;
//         return temp;
//     }
//     while (sum != 0)
//     {
//         struct ListNode *temp = (struct ListNode *)malloc(sizeof(struct ListNode));
//         temp->next = NULL;
//         temp->val = sum % 10;

//         if (p == NULL)
//         {
//             p = temp;
//             lastNodePointer = p;
//         }
//         else
//         {
//             lastNodePointer->next = temp;
//             lastNodePointer = temp;
//         }
//         sum = sum / 10;
//     }

//     return p;
// }


//OPTIMIZED FUNCTION
struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2)
{
    struct ListNode *result = NULL;
    struct ListNode *lastNodePointer = NULL;
    int carry = 0;
    //l1 = reverseList(l1);
    //l2 = reverseList(l2);

    while (l1 != NULL || l2 != NULL || carry != 0)
    {
        int sum = carry;

        if (l1 != NULL)
        {
            sum += l1->val;
            l1 = l1->next;
        }

        if (l2 != NULL)
        {
            sum += l2->val;
            l2 = l2->next;
        }

        // Create a new node for the current digit
        struct ListNode *temp = (struct ListNode *)malloc(sizeof(struct ListNode));
        temp->val = sum % 10;
        temp->next = NULL;

        // Update carry
        carry = sum / 10;

        // Append the node to the result list
        if (result == NULL)
        {
            result = temp;
            lastNodePointer = result;
        }
        else
        {
            lastNodePointer->next = temp;
            lastNodePointer = temp;
        }
    }

    return result;
}