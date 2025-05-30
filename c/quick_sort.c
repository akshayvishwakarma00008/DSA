#include<stdio.h>

void swap(int arr[], int i, int j)
{
    int temp;
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

int partition(int arr[], int l, int r)
{
    int pivot,j;
    pivot = arr[r];
    int i=l-1;
    for (j = l; j < r; j++)
    {
        if (arr[j]<pivot)
        {
            i++;
            swap(arr,i,j);
        }
        
    }
    swap(arr,i+1,r);
    return i+1;
}

void quicksort(int arr[], int l, int r)
{
    if (l<r)
    {
        int pi;
        pi=partition(arr,l,r);
        quicksort(arr,l,pi-1);
        quicksort(arr,pi+1,r);
    }
}

int main() 
{
    int arr[5]={5,4,6,2,1};
    quicksort(arr,0,4);
    for(int i=0; i<5; i++)
    {
        printf("%d",arr[i]);
    }
}