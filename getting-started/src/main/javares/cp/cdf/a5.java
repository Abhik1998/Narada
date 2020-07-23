import java.util.*;
public class a5{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            int a[]=new int[n];
            int b[]=new int[n];
            int fl=0,c=0;
            HashSet<Integer> h1=new HashSet<>();
            HashSet<Integer> h2=new HashSet<>();
            List<Integer> l=new ArrayList<>();
            for(int i=0;i<n;i++)
            a[i]=sc.nextInt();
            for(int i=0;i<n;i++)
            b[i]=sc.nextInt();

            for(int i=0;i<n;i++){
                if(h1.containsKey(a[i])&&h1.containsKey(b[i])){
                    
                }
                else
                if((h1.containsKey(a[i])&&h2.containskey(a[i]))||(h1.containsKey(b[i])&&h2.containsKey(b[i]))||(h1.containsKey(a[i])&&h1.containsKey(b[i]))||(h2.containsKey(a[i])&&h2.containsKey(b[i])))
                {
                    System.out.println(-1);
                    fl=1;
                    break;
                }
                if((h1.containsKey(a[i])&&!h2.containsKey(a[i]))||(!h1.containsKey(b[i])&&h2.containsKey(b[i]))){
                    c+=1;
                    h1.add(b[i]);
                    h2.add(a[i]);
                    l.add(i);
                }
                else{
                    h1.add(a[i]);
                    h2.add(b[i]);
                }

            }
            
            if(fl==1)
            continue;

            System.out.println(c);
            for(int i=0;i<c;i++)
            System.out.print(l.get(i)+" ");
            System.out.println();
        }
        sc.close();
    }
    
}