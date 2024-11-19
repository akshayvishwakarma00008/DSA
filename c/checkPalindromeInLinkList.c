#include <stdio.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *head = NULL;

//palindrome function and reverse function
struct ListNode * reverseList(struct ListNode * head){
    struct ListNode * prev = NULL;
    struct ListNode * curr = head;
    struct ListNode * next = NULL;

    while (curr != NULL){
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

int palindrome(){
    struct ListNode *slow = head;
    struct ListNode *fast = head;
    struct ListNode *secondHalf = NULL;
    struct ListNode *firstHalf = NULL;

     if (head == NULL || head->next == NULL) {
        return 1;
    }

    while(fast != NULL && fast->next != NULL){
        slow = slow->next;
        fast = fast->next->next;
    }

    secondHalf = reverseList(slow);
    firstHalf = head;

    while(secondHalf != NULL){
        if(firstHalf->val != secondHalf->val){
            return 0;
        }
        firstHalf = firstHalf->next;
        secondHalf = secondHalf->next;
    }
    return 1;
    
}