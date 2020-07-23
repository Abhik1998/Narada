import java.util.*;
public class a4{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt(),fl=0;
            int a[]=new int[n];
            for(int i=0;i<n;i++)
            a[i]=sc.nextInt();
            //HashSet<Integer> h=new HashSet<>();
            int x=0;
            for(int i=0;i<64;i++){
                int c=0;
                for(int j=0;j<n;j++){
                    int mask = a[j] & (1<<i);
                    if(mask==1)
                    c+=1;
                }
                if(c>=2)
                x+=1;
            }
            if(x==n)
            System.out.println("NO");
            else
            System.out.println("YES");
        }
        sc.close();
    }
}