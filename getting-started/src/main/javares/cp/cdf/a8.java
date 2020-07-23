import java.util.*;
public class a8{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            int a[]=new int[n];
            for(int i=0;i<n;i++)
            a[i]=sc.nextInt();
            System.out.println(rev(a,0,n));

        }
    }
    public static int rev(int a[],int st,int n){
        int max=0,m=0,l=-1,r=-1;
        for(int i=1;i<n;i+=2)
        {
            m+=a[i]-a[i-1];
            if(m<0)
                {
                    l=i+1;
                    m=0;
                }
            if(max<m)
            {
                r=i;
                max=m;
            }
        }
        //System.out.println(max+" "+l+" "+r);
        for(int i=0;i<n;i++)
        max+=(i%2==0)?a[i]:0;
        // for(int i=r+1;i<n;i++)
        // max+=(i%2==0)?a[i]:0;
        return max;

    }
}