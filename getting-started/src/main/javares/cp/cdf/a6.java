import java.util.*;
public class a6{
    //static String k="";
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        String m="abacaba";
        while(t-->0){
            int n=sc.nextInt(),st=-1,c=0,fl=0;
            String s=sc.next();
            for(int i=0;i<n;i++)
            {
                if((s.charAt(i)=='?'||s.charAt(i)=='a')&&recur(s,i,m,n))
                {
                    c+=1;
                    st=i;
                    
                    System.out.println(c+" "+st);
                }
                if(c>=2)
                {
                    System.out.println("NO");
                    fl=1;
                    break;
                }
            }
            if(c==0)
                {
                    System.out.println("NO");
                    continue;
                }
            if(fl==1)
            continue;
            System.out.println("Yes");
            System.out.println(s.substring(0,st)+m+s.substring(st+m.length()));

            
        }
        sc.close();
    }
    public static boolean recur(String s, int i , String m, int n){
        //k="";
        if(i+m.length()>s.length())
        return false;
        for(int j=i;j<i+m.length();j++)
        {
            if(s.charAt(j)=='?')
            continue;
            if(s.charAt(j)==m.charAt(j-i))
            continue;
            else
            return false;
        }
        return true;
        
    }
}