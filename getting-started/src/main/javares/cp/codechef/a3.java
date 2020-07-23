import java.util.*;
public class a3{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt(),fl=0;
            String s=sc.next();
            int a[]=new int[26];
            for(int i=0;i<n;i++)
            a[s.charAt(i)-'a']+=1;
            for(int i=0;i<26;i++)
            if(a[i]%2!=0)
            {
                System.out.println("NO");
                fl=1;
                break;
            }
            if(fl==1)
            continue;
            System.out.println("YES");
        }
        sc.close();
    }
}