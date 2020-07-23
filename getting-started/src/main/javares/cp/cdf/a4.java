import java.util.*;
public class a4{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            String s=sc.next();
            System.out.println(recur(s,0,n,n,'a'));
        }
        sc.close();
    }
    public static int recur(String s, int a,int b,int n,char ch){
        if(n==1)
        return (s.charAt(a)==ch)?0:1;
        int ans1=0,ans2=0,c1=0,c2=0;
        int k=a+(b-a)/2;
            for(int i=a;i<k;i++)
            c1+=(s.charAt(i)==ch)?1:0;
            for(int i=k;i<b;i++)
            c2+=(s.charAt(i)==ch)?1:0;

            
            ans1=n/2 - c1 + recur(s,k,b,n/2,(char)(ch+1));
            
            ans2 = n/2 - c2 + recur(s,a,k,n/2,(char)(ch+1));
        return Math.min(ans1,ans2);
        
    }
}