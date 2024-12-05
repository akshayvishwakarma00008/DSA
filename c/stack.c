#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *stack = NULL;
struct node *top = NULL;

struct node *create_node(int data)
{
    struct node *new_node = (struct node *)malloc(sizeof(struct node));
    new_node->data = data;
    new_node->next = NULL;
    return new_node;
}

void push(int data)
{
    struct node *new_node = create_node(data);
    if (stack == NULL)
    {
        stack = new_node;
        top = stack;
    }
    else
    {
        top->next = new_node;
        top = new_node;
    }
}

void pop()
{
    struct node *temp = stack;
    int deleted_data;
    if (stack == NULL)
    {
        printf("Stack is empty\n");
        return;
    }
    if(stack->next == NULL){
        deleted_data = stack->data;
        printf("Node %d deleted\n", deleted_data);
        free(temp);
        stack = NULL;
        top == NULL;
    }

    while (temp->next->next != NULL)
    {
        temp = temp->next;
    }
    top = temp;
    temp = temp->next;
    deleted_data = temp->data;
    printf("Node %d deleted\n", deleted_data);
    free(temp);
}

void peek()
{
    if (stack == NULL)
    {
        printf("Stack is empty");
        return;
    }

    printf("%d is at the of stack\n", top->data);
}
int main()
{   
    pop();
    push(2);
    push(3);
    push(4);
    push(9);
    push(8);
    pop();
    peek();
}
