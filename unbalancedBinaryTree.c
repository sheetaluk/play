#include<stdio.h>
#include<stdlib.h>

typedef struct treeNode{
  int value;
  struct treeNode *left;
  struct treeNode *right;
} node;

int createNode(node **head, int num){  
  if (!*head) {    
    node *newNode;
    newNode = (node *)malloc(sizeof(node));
    newNode->value = num;
    newNode->left = NULL;
    newNode->right = NULL;
    
    if (!newNode) {
      return 0;
    }  

    *head = newNode;
    return 1;
  }

  if (num < (*head)->value) {
    createNode(&(*head)->left, num);
  }
  else if(num > (*head)->value) {
    createNode(&(*head)->right, num);
  }
  else {
    return 1;
  }
}

void preorderTraversal(node *head){
  if(!head){
    return;
  }
  printf("%d\t",head->value);
  preorderTraversal(head->left);
  preorderTraversal(head->right);
}

int main(void){

  int inputArray[10];
  node *root = NULL;
  int i;
  
  for(i=0; i<10; i++){
    inputArray[i] = rand() % 10;
    printf("%d\t",inputArray[i]);
    createNode(&root,inputArray[i]);
  }
  
  preorderTraversal(root);
}



