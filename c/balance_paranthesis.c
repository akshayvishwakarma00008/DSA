#include <stdio.h>

int main()
{
    char stack[10];
    char str[10] = "{[()]}";
    int i, top = -1;
    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[')
        {
            top++;
            stack[top] = str[i];
        }
        else
        {
            if (top == -1)
            {
                printf("Unbalanced brackets.\n");
                return 0;
            }

            if ((str[i] == ')' && stack[top] == '(') ||
                (str[i] == '}' && stack[top] == '{') ||
                (str[i] == ']' && stack[top] == '['))
            {
                top--;
            }
            else
            {
                printf("Unbalanced brackets.\n");
                return 0;
            }
        }
    }

    if (top == -1)
    {
        printf("Brackets are balanced.\n");
    }
    else
    {
        printf("Unbalanced brackets.\n");
    }

    return 0;
}
