#include <stdio.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *list1 = NULL;
struct ListNode *list2 = NULL;

//logic to merge two list in sorted order
struct ListNode *mergeTwoLists(struct ListNode *list1, struct ListNode *list2)
{
    struct ListNode *q = list1;
    struct ListNode *p = NULL;
    struct ListNode *m;
    struct ListNode *mergedList = list1;
    int count = 0;
    int i, j;
    int temp;

    while (q != NULL)
    {
        p = q;
        q = q->next;
        count++;
    }

    if(p != NULL){
        p->next = list2;
    }else{
        return list2;
    }

    for(i=0;i<count;i++){
        {
            m = mergedList;
            while (m != NULL && m->next != NULL)
            {
                if((m->val > m->next->val)){
                    temp = m->val;
                    m->val = m->next->val;
                    m->next->val = temp;
                }
                m = m->next;
                
            }
            

        }
    }

    return mergedList;
}