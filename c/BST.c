#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node *insertion(struct node *root, int data)
{
    if (root == NULL)
    {
        struct node *new_node;
        new_node = (struct node *)malloc(sizeof(struct node));
        new_node->left = NULL;
        new_node->right = NULL;
        new_node->data = data;
        return new_node;
    }
    if (data < root->data)
    {
        root->left = insertion(root->left, data);
    }
    else
    {
        root->right = insertion(root->right, data);
    }

    return root;
}

void min_element(struct node *root)
{
    struct node *current = root;
    if (root == NULL)
    {
        printf("Tree is empty\n");
        return;
    }

    while (current->left != NULL)
    {
        current = current->left;
    }

    printf("The minimum element in the tree is - %d\n", current->data);
}

void max_element(struct node *root)
{
    struct node *current = root;
    if (root == NULL)
    {
        printf("Tree is empty\n");
        return;
    }

    while (current->right != NULL)
    {
        current = current->right;
    }

    printf("The maximum element in the tree is - %d\n", current->data);
}

// max using recursive approach
void max_recursive(struct node *root)
{
    if (root == NULL)
    {
        printf("Tree is empty\n");
        return;
    }
    else if (root->right == NULL)
    {
        printf("The maximum element in the tree is - %d\n", root->data);
    }

    return max_recursive(root->right);
}

// min using recursive approach
void min_recursive(struct node *root)
{
    if (root == NULL)
    {
        printf("Tree is empty\n");
        return;
    }
    else if (root->left == NULL)
    {
        printf("The minimum element in the tree is - %d\n", root->data);
    }

    return max_recursive(root->left);
}

int max_of_two(int a, int b)
{
    return a > b ? a : b;
}
// height / depth of the tree
int height(struct node *root)
{
    if (root == NULL)
    {
        return -1;
    }

    return max_of_two(height(root->left), height(root->right)) + 1;
}
int main()
{
    struct node *root = NULL;
    int h;
    root = insertion(root, 30);
    root = insertion(root, 12);
    root = insertion(root, 25);
    root = insertion(root, 41);
    root = insertion(root, 50);

    min_element(root);
    max_element(root);
    h = height(root);
    printf("The height of tree is - %d",h);
}
