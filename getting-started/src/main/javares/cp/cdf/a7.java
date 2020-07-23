import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
public class a7{
    public static void main(String args[])throws IOException{
        //Scanner sc=new Scanner(System.in);
        InputStreamReader reader=new InputStreamReader(System.in);
        BufferedReader in=new BufferedReader(reader);
        int tt=Integer.parseInt(in.readLine());
        while(tt-->0){
            String s=in.readLine();
            String t=in.readLine();
            // HashMap<Character, ArrayList<Integer>> h=new HashMap<>();
            // for(int i=0;i<s.length();i++)
            // {
            //     char ch= s.charAt(i);
            //     if(h.containsKey(ch))
            //     h.get(ch).add(i);
            //     else
            //     {
            //         ArrayList<Integer> l=new ArrayList<>();
            //         l.add(i);
            //         h.put(ch,l);
            //     }
                
            // }
            // int prev=-1,c=1,f=0;
            // for(int i=0;i<t.length();i++){
            //     char ch=t.charAt(i);
            //     int fl=0;
            //     if(!h.containsKey(ch))
            //     {
            //         f=1;
            //         System.out.println(-1);
            //         break;
            //     }
            //     ArrayList<Integer> l=h.get(ch);
            //     for(int j=0;j<l.size();j++)
            //     if(l.get(j)>prev)
            //     {prev=l.get(j);fl=1;break;}
            //     if(fl==1)
            //     continue;
            //     else
            //     {
            //         prev = l.get(0);
            //         c+=1;
            //     }
            // }
            // if(f==1)
            // continue;
            // System.out.println(c);
            System.out.println(ans(s,t));
        }
       // sc.close();
    }
    public static int ans(String s,String t){
        int res[][]=new int[s.length()+5][26];
        //for(int i=s.length();i>s.length()-1;i--)
            for(int j=0;j<26;j++)
            res[s.length()][j]=-1;
            for(int i=s.length()-1;i>=0;i--)
            {
                for(int j=0;j<26;j++)
                res[i][j]=res[i+1][j];
                res[i][s.charAt(i)-'a']=i;
            }
            int pos=0,c=1;
            for(int i=0;i<t.length();i++){
                if(pos==s.length())
                {
                    pos=0;
                    c+=1;
                }
                if(res[pos][t.charAt(i)-'a']==-1){
                    pos=0;
                    c+=1;
                }
                    if(res[pos][t.charAt(i)-'a']==-1&&pos==0)
                    return -1;
                
                pos=res[pos][t.charAt(i)-'a'] + 1;
                
                
            }
            return c;

        
    }
}