import java.util.*;
public class a3{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            int a[]=new int[n];
            for(int i=0;i<n;i++){
                a[i]=sc.nextInt();
            }
            if(n==1)
            {
                System.out.println(0);
                continue;
            }
            int i=n-2;
            if(a[n-1]>a[n-2])
            {
                for(i=n-2;i>=1;i--){
                    if(a[i]<a[i-1])
                    break;
                }
                System.out.println(i);
            }
            else{
                for(i=n-2;i>=1;i--)
                if(a[i]>a[i-1])
                break;
                
                while(i>=1 && a[i]>=a[i-1])
                i--;
                System.out.println(i);
                                
            }
            // for(i=n-1;i>=1;i--){
            //     if(mn==0)
            //     break;
            //     if(a[i]<a[i-1]&&fl==0)
            //     {
            //         mn+=1;
            //         fl=1;
            //     }
            //     else
            //     if(a[i]>a[i-1]&&fl==1){
            //         mn+=1;
            //         fl=0;

            //     }


            
            //System.out.println(i);
            
        }
        sc.close();
    }
}