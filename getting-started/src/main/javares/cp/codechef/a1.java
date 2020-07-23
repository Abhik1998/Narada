import java.util.*;
public class a1{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            int x=0,y=0;
            for(int i=0;i<4*n-1;i++)
            {
                x^=sc.nextInt();
                y^=sc.nextInt();
            }
            System.out.println(x+" "+y);
        }
        

    }
}