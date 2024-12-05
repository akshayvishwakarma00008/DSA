#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *front = NULL;
struct node *back = NULL;

struct node *create_node(int data)
{
    struct node *new_node = (struct node *)malloc(sizeof(struct node));
    new_node->data = data;
    new_node->next = NULL;
}

void enqueue(int data)
{
    struct node *new_node = create_node(data);
    if (front == NULL)
    {
        front = new_node;
        back = front;
    }
    else
    {
        back->next = new_node;
        back = new_node;
    }
}

void dequeue()
{
    struct node *temp = front;
    if (front == NULL)
    {
        printf("Queue is empty\n");
        return;
    }
    else if (front->next == NULL)
    {
        printf("%d is deleted from queue\n", temp->data);
        free(temp);
        front = NULL;
        back = NULL;
    }
    else
    {
        front = front->next;
        printf("%d is deleted from queue\n", temp->data);
        free(temp);
    }
}

void front_node()
{
    if (front == NULL)
    {
        printf("Queue is empty\n");
        return;
    }

    printf("%d is at front\n", front->data);
}
void last_node()
{
    if (front == NULL)
    {
        printf("Queue is empty\n");
        return;
    }

    printf("%d is at front\n", back->data);
}

int main()
{
    enqueue(3);
    enqueue(5);
    enqueue(2);
    enqueue(9);
    enqueue(1);
    enqueue(9);
    dequeue();
}