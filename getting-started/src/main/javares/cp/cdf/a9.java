import java.util.*;
public class a9{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        int a[]=new int[151];
        //HashMap<Integer,Integer> h=new HashMap<>();
        for(int i=1;i<151;i++){
            //if(i%10==0)
            a[i]=sumdigit(i);
            
            
            a[i]+=a[i-1];
            System.out.print(a[i]+" ");
            //h.put(a[i],i);
        }
        while(t-->0){
            int n=sc.nextInt();
            int k=sc.nextInt();
            int fl=0;
            for(int i=k+1;i<151;i++)
            if(a[i]-a[i-k-1]==n)
            {
                System.out.println(i-k);
                fl=1;
                break;
            }
            if(fl==1)
            continue;
            System.out.println(-1);
            //int a[]=new int[n];
        }
        sc.close();
    }
    public static int sumdigit(int n){
        int sum;
        for(sum=0;n>0;sum+=n%10, n/=10);
        return sum;
    }
}