#include<stdio.h>
#include<stdlib.h>

struct BSTNode{
    int data;
    struct BSTNode *left;
    struct BSTNode *right;
};


struct BSTNode *createNode(int data){
    struct BSTNode *node = (struct BSTNode *)malloc(sizeof(struct BSTNode));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
}

struct BSTNode *insertNode(struct BSTNode *root,int info){
    if(root == NULL){
        return createNode(info);
    }else if(info < root->data){
        insertNode(root->left,info);
    }else{
        insertNode(root->right,info);
    }

    return root;
}


int main(){
    struct BSTNode *root  = NULL;
    root = insertNode(root,5);
    root = insertNode(root,17);
    root = insertNode(root,3);
    root = insertNode(root,5);
    root = insertNode(root,10);
}