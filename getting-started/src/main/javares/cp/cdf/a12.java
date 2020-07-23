import java.util.*;
public class a12{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();

        int a[]=new int[n];
        for(int i=0;i<n;i++)
            a[i]=sc.nextInt();
        String s[]=new String[n];
        for(int i=0;i<n;i++)
            s[i]=sc.next();
        long dp[]=new long[n];
        long wr[]=new long[n];
        wr[0]=a[0];
        for(int i=1;i<n;i++)
        {
            if(s[i].compareTo(s[i-1])>=0&&s[i-1].compareTo(rev(s[i]))<=0)
            wr[i]=a[i];
            if(s[i].compareTo(s[i-1])>=0&&s[i-1].compareTo(rev(s[i]))>0)
            wr[i]=(long)(wr[i-1]+a[i]);
            if(s[i].compareTo(s[i-1])<0)
            wr[i]=wr[i-1];
        }
        
        for(int i=1;i<n;i++)
            {
                dp[i]=(long)dp[i]+dp[i-1];
                if(s[i].compareTo(s[i-1])>=0)
                continue;
                if(s[i].compareTo(rev(s[i-1]))>=0||(rev(s[i]).compareTo(s[i-1]))>=0)

                    dp[i]=(long)dp[i-1]+((s[i].compareTo(rev(s[i-1]))>=0)?Math.min(wr[i],a[i]):a[i]);
                else
                if(rev(s[i]).compareTo(rev(s[i-1]))>=0)
                {
                    dp[i]=dp[i-1]+wr[i-1]+a[i];
                }
                else
                {
                    System.out.println(-1);
                    return;
                }
            }
            System.out.println(dp[n-1]);
            

        sc.close();

    }
    public static String rev(String s){
        return new StringBuilder(s).reverse().toString();
    }
}